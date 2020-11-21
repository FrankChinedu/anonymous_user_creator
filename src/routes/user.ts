import express from "express";

import { User as UserController } from "../controller/User";

const Router = express.Router();

Router.get("/", UserController.index);

export default Router;
