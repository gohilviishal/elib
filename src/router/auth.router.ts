import { createUser, loginUser } from "#controllers/auth.controller";
import { validate } from "#middlewares/validationHandler";
import { loginSchema, userSchema } from "#validators/auth.validator";
import express from "express";
const userRouter = express.Router();

//Routes
userRouter.post("/register", validate(userSchema), createUser);
userRouter.post("/login", validate(loginSchema), loginUser);

export default userRouter;