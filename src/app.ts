import express from "express";

const app = express();

app.get("/", (_req, res) => {
    res.json({message:"Welcome to elib APIs"})
});

export default app;
