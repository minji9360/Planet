import express from "express";
import { plans } from "../controllers/planController.js";
import routes from "../routes.js";

const planRouter = express.Router();

planRouter.get(routes.plans, plans);

export default planRouter;