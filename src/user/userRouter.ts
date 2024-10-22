import express from "express";
import { createUser, loginUser } from "./userController";
import { validate } from "../middlewares/validationHandler";
import { loginSchema, userSchema } from "./userSchema";

const userRouter = express.Router();

//Routes
userRouter.post("/register", validate(userSchema), createUser);
// userRouter.post("/login", validate(loginSchema), loginUser);

export default userRouter;
