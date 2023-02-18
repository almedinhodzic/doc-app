import mongoose, { Schema } from "mongoose";
import { Treatment } from "../types/Treatment";

const TreatmentModel = new Schema<Treatment>({
  therapy: {
    type: String,
    required: true,
  },
  dateOfTherapy: {
    type: Date,
    required: true,
  },
  status: String,
  patient: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
  },
});

const Treatment = mongoose.model("Treatment", TreatmentModel);

export default Treatment;
