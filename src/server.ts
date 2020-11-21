import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import cors from "cors";
import consola from "consola";

import { APP_PORT, MONGO_URL } from "./config/env";
import Route from "./routes/index";
import { getIp } from "./middleware";

const app = express();
app.use(json());
app.use(cors());
app.use(getIp);

app.get("/", async (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Anon user creator",
  });
});

Route(app);

app.use((req, res) => res.status(404).json({ error: "Route not found" }));

mongoose.connect(
  MONGO_URL,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  () => {
    consola.success("connected to database");
    app.listen(APP_PORT, () => {
      consola.success(`server is listening on port ${APP_PORT}`);
    });
  }
);

export { app };
