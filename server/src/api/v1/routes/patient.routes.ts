import { Router } from "express";
import { postPatient } from "../controllers/patient.controller";

export const patientRouter = Router();

patientRouter.post("/", postPatient);
