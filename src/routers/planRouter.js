import express from "express";
import {
	plans,
	postUploadPlan,
	deletePlan,
	checkPlan,
	postUploadSentence,
	postEditPlan,
	postEditSentence,
	postUploadFeedback,
	deleteFeedback,
} from "../controllers/planController.js";
import { onlyPrivate } from "../middlewares.js";
import routes from "../routes.js";

const planRouter = express.Router();

planRouter.get(routes.home, onlyPrivate, plans);
planRouter.post(routes.uploadPlan, postUploadPlan);
planRouter.post(routes.uploadSentence, postUploadSentence);
planRouter.post(routes.uploadFeedback, postUploadFeedback);
planRouter.get(routes.deletePlan(), onlyPrivate, deletePlan);
planRouter.post(routes.deleteFeedback, onlyPrivate, deleteFeedback);
planRouter.post(routes.editPlan, postEditPlan);
planRouter.post(routes.editSentence, postEditSentence);
planRouter.post(routes.checkPlan(), checkPlan);

export default planRouter;
