import { Router } from "express";

import { userRouter } from "./user.routes";
import { authRouter } from "./auth.routes";

export const router = Router();

router.use("/api/v1/users", userRouter);
router.use("/api/v1/auth", authRouter);
