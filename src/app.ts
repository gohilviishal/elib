import { config } from "#config";
import connectDB from "#loaders/database";
import createApp from "#loaders/express";

const startServer = async () => {
  const app = createApp();
  await connectDB();
  const port = config.port || 3000;
  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
};

startServer();
