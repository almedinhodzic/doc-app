import { Router } from "express";

// Swagger
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../../../config/swagger/swagger-auth.json";

import { userRouter } from "./user.routes";
import { authRouter } from "./auth.routes";
// import { patientRouter } from "./patient.routes";
// import { treatmentRouter } from "./treatment.routes";

export const router = Router();

router.use("/api/v1/users", userRouter);
router.use("/api/v1/auth", authRouter);

// router.use("/api/v1/patients", patientRouter);
// router.use("/api/v1/treatments", treatmentRouter);

// Documentation
router.use("/api-docs/auth", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
