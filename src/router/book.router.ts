import { createBook } from "#controllers/book.controller";
import express from "express";

const bookRouter = express.Router();

bookRouter.post("/", createBook);

export default bookRouter;
