import express from "express";
import { guestPlans } from "../controllers/guestController.js";
import { onlyPublic } from "../middlewares.js";
import routes from "../routes.js";

const guestRouter = express.Router();

guestRouter.get(routes.home, onlyPublic, guestPlans);

export default guestRouter;
