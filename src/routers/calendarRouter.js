import express from "express";
import { calendar } from "../controllers/calendarController.js";

const calendarRouter = express.Router();

calendarRouter.get("/", calendar);

export default calendarRouter;
