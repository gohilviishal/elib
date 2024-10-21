import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";

const app = express();
app.use(express.json());

// Routes
// Http methods: GET, POST, PUT, PATCH, DELETE
app.get("/", (_req, res) => {
  res.json({ message: "Welcome to elib APIs" });
});

app.use("/api/users", userRouter);

// Global error handler
app.use(globalErrorHandler);

export default app;
