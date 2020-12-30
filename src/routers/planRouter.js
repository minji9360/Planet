import express from "express";
import {
	plans,
	postUpload,
	deletePlan,
	checkPlan,
	editPlan,
} from "../controllers/planController.js";
import { onlyPrivate } from "../middlewares.js";
import routes from "../routes.js";

const planRouter = express.Router();

planRouter.get(routes.home, onlyPrivate, plans);
planRouter.post(routes.upload, postUpload);
planRouter.get(routes.deletePlan(), onlyPrivate, deletePlan);
planRouter.post(routes.editPlan(), editPlan);
planRouter.post(routes.checkPlan(), checkPlan);

export default planRouter;
