import express from "express";
import createHttpError from "http-errors";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();

// Routes
// Http methods: GET, POST, PUT, PATCH, DELETE
app.get("/", (_req, res) => {
    const error = createHttpError(400,"something went wrong")
    throw error;
  res.json({ message: "Welcome to elib APIs" });
});

// Global error handler
app.use(globalErrorHandler);

export default app;
