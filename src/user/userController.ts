import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  // Database call
  const user = await userModel.findOne({ email });

  if (user) {
    const error = createHttpError(400, "User already exist with this email.");
    return next(error);
  }

  //Password Hash
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });

  //token generation JWT

  const token = sign({ sub: newUser._id }, config.jwtSecret as string, {
    expiresIn: "7d",
  });

  //Process
  //Response
  res.json({ accessToken: token, message: "User created successfully" });
};

export { createUser };
