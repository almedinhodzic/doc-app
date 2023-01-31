import Router from "express";
import { postDoctor } from "../controllers/doctor.controller";

export const doctorRouter = Router();

doctorRouter.post("/", postDoctor);
