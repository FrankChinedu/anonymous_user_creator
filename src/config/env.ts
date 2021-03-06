import { throwIfUndefined } from "../utils/index";
import dotenv from "dotenv";

dotenv.config();

export const NODE_ENV = process.env.NODE_ENV;

export const MONGO_URL =
  NODE_ENV === "test"
    ? throwIfUndefined(process.env.MONGO_URL_TEST, "MONGO_URL_TEST")
    : throwIfUndefined(process.env.MONGO_URL, "MONGO_URL");

export const APP_PORT =
  process.env.PORT || throwIfUndefined(process.env.APP_PORT, "APP PORT");
