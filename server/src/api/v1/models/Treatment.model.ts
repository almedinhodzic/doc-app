import mongoose, { Schema } from "mongoose";
import { ITreatment } from "../interfaces/ITreatment";

const TreatmentModel = new Schema<ITreatment>({
  therapy: {
    type: String,
    required: true,
  },
  dateOfTherapy: {
    type: Date,
    required: true,
  },
  status: String,
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
  },
});

const Treatment = mongoose.model("Treatment", TreatmentModel);

export default Treatment;
