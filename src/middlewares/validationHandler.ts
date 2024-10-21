import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import { Schema, ValidationError } from "yup";

export const validate =
  <T>(schema: Schema<T>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body);
      next();
    } catch (err) {
      if (err instanceof ValidationError) {
        const error = createHttpError(400, err.message);
        return next(error);
      }

      const error = createHttpError(500, "Internal Server Error");
      next(error);
    }
  };
