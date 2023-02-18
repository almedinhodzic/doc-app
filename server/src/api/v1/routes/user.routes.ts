import Router from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers";

export const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:userId", getUser);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);
