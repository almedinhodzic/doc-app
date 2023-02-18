import mongoose, { Schema } from "mongoose";
import { Patient } from "../types/Patient";

const PatientModel = new Schema<Patient>(
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
