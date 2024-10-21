import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";

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

  
  //Process
  //Response
  res.json({ message: "User created successfully" });
};

export { createUser };
