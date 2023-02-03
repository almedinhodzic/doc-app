import Router from "express";
import { postTreatment } from "../controllers/treatment.controller";

export const treatmentRouter = Router();

treatmentRouter.post("/", postTreatment);
