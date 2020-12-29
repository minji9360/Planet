import express from "express";
import { guestPlans } from "../controllers/guestController.js";

const guestRouter = express.Router();

guestRouter.get("/plans", guestPlans);

export default guestRouter;
