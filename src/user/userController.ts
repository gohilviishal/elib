import { Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";
import { IUser } from "./userTypes";
import asyncHandler from "express-async-handler";

const createUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    throw createHttpError(400, "User already exists with this email.");
  }

  // Hash password and create new user
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser: IUser = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });

  // Generate JWT token
  const token = sign({ sub: newUser._id }, config.jwtSecret as string, {
    expiresIn: "7d",
  });

  // Response
  res.json({ accessToken: token, message: "User created successfully" });
});

export { createUser };
