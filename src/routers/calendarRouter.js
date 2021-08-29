import express from "express";
import { calendar, calendarPlan } from "../controllers/calendarController.js";
import routes from "../routes.js";

const calendarRouter = express.Router();

calendarRouter.get(routes.home, calendar);
calendarRouter.get(routes.calendarPlan, calendarPlan);

export default calendarRouter;
