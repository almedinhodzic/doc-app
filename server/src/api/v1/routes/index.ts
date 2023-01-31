import { Router } from "express";

import { userRouter } from "./user.routes";
import { authRouter } from "./auth.routes";
import { doctorRouter } from "./doctor.routes";

export const router = Router();

router.use("/api/v1/users", userRouter);
router.use("/api/v1/auth", authRouter);
router.use("/api/v1/doctors", doctorRouter);
