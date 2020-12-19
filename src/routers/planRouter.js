import express from "express";
import { deletePlan, plans, postUpload } from "../controllers/planController.js";
import { onlyPrivate } from "../middlewares.js";
import routes from "../routes.js";

const planRouter = express.Router();

planRouter.get("/", plans);
planRouter.post("/upload", postUpload);
planRouter.get(routes.deletePlan(), onlyPrivate, deletePlan);

export default planRouter;