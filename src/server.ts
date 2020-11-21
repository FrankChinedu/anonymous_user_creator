import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import cors from "cors";
import consola from "consola";

import { APP_PORT, MONGO_URL } from "./config/env";

const app = express();
app.use(json());
app.use(cors());

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
