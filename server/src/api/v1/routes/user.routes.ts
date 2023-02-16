import Router from "express";
import { deleteUser, getUser, getUsers } from "../controllers";

export const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:userId", getUser);
userRouter.delete("/:id", deleteUser);
