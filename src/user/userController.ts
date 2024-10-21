import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  
  //Process
  //Response
  res.json({ message: "User created successfully" });
};

export { createUser };
