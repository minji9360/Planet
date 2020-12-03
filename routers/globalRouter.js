import express from "express";
import { home } from "../src/controllers/planController.js";
import { join, login, logout } from "../src/controllers/userController.js";
import routes from "../routes.js";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;