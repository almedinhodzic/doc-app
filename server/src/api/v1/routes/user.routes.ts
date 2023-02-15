import Router from "express";
import { getUser, getUsers } from "../controllers";

export const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:userId", getUser);
