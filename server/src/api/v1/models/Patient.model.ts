import mongoose, { Schema } from "mongoose";
import { IPatient } from "../interfaces/IPatient";

const PatientModel = new Schema<IPatient>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
    },
    dateOfBirth: Date,
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },
  },
  { timestamps: true }
);

const Patient = mongoose.model("Patient", PatientModel);

export default Patient;
