
import globalErrorHandler from "#middlewares/globalErrorHandler";
import router from "#router";
import express from "express";

const createApp = () => {
  const app = express();
  app.use(express.json());
  app.get("/", (_req, res) => {
    res.json({ message: "Welcome to elib APIs" });
  });
  app.use("/api", router);
  app.use(globalErrorHandler);
  return app;
};

export default createApp;
