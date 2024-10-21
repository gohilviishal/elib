import express from "express";
import { createUser } from "./userController";
import { validate } from "../middlewares/validationHandler";
import { userSchema } from "./userSchema";

const userRouter = express.Router();

//Routes
userRouter.post("/register", validate(userSchema), createUser);

export default userRouter;
