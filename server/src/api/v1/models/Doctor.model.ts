import mongoose, { Schema } from "mongoose";
import { IDoctor } from "../interfaces/IDoctor";

const DoctorSchema = new Schema<IDoctor>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    medicalSpecialty: {
      type: String,
      required: true,
    },
    dateOfBirth: Date,
    yearOfGraduation: Number,
    university: String,
    gender: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Doctor = mongoose.model("Doctor", DoctorSchema);
export default Doctor;
