import Router from "express";
import { getUser } from "../controllers";

export const userRouter = Router();

userRouter.get("/", getUser);
