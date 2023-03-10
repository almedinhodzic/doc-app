/* eslint-disable @typescript-eslint/no-non-null-assertion */
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./api/v1/routes";

// Logger
import Logger from "./config/logger";
// Morgan middleware for logging
import morganMiddleware from "./api/v1/middlewares/log/morgan.middleware";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(morganMiddleware);

// Routes
app.use("/", router);

const PORT = process.env.PORT || 8081;

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => {
    app.listen(PORT, () => Logger.info(`Server Port: ${PORT}`));
  })
  .catch((error) => Logger.error(`Error: ${error}`));
