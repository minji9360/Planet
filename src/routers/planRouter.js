import express from "express";
import { plans, postUpload } from "../controllers/planController.js";

const planRouter = express.Router();

planRouter.get("/", plans);
planRouter.post("/upload", postUpload);

export default planRouter;