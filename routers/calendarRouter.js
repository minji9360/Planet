import express from "express";
import { calendar } from "../controllers/calendarController.js";
import routes from "../routes.js";

const calendarRouter = express.Router();

calendarRouter.get(routes.calendar, calendar);

export default calendarRouter;
