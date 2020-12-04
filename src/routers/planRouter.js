import express from "express";
import { plans } from "../controllers/planController.js";

const planRouter = express.Router();

planRouter.get("/", plans);

export default planRouter;