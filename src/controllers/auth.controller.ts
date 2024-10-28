import { Request, Response } from "express";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { IUser } from "#types/auth";
import { config } from "#config";
import User from "#models/user.model";

const createUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw createHttpError(400, "User already exists with this email.");
  }

  // Hash password and create new user
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser: IUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // Generate JWT token
  const token = sign({ sub: newUser._id }, config.jwtSecret as string, {
    expiresIn: "7d",
  });

  // Response
  res
    .status(201)
    .json({ accessToken: token, message: "User created successfully" });
});

const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw createHttpError(401, "Email incorrect.");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw createHttpError(401, "Password incorrect.");
  }

  const token = sign({ sub: user._id }, config.jwtSecret as string, {
    expiresIn: "7d",
  });

  res.json({ accessToken: token });
});

export { createUser, loginUser };
