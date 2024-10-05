import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();

// Routes
// Http methods: GET, POST, PUT, PATCH, DELETE
app.get("/", (_req, res) => {
  res.json({ message: "Welcome to elib APIs" });
});

// Global error handler
app.use(globalErrorHandler);

export default app;
