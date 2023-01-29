import { Router } from "express";

import { userRouter } from "./user.route";

export const router = Router();

router.use("/api/v1/users", userRouter);
