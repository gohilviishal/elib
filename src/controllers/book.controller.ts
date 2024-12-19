import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

const createBook = asyncHandler((req: Request, res: Response) => {
  
  res.json({ message: "ok" });
});

export { createBook };
