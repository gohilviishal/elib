import express from "express";
import userRouter from "./auth.router";
import bookRouter from "./book.router";

const router = express.Router();

router.use("/auth", userRouter);
router.use("/book", bookRouter);

export default router;
