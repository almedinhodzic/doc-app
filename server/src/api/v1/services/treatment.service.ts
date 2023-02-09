import Treatment from "../models/Treatment.model";
import { ITreatment } from "../interfaces/ITreatment";

export const createTreatment = async (
  treatmentData: ITreatment
): Promise<ITreatment> => {
  const treatment = new Treatment({
    therapy: treatmentData.therapy,
    dateOfTherapy: treatmentData.dateOfTherapy,
    status: treatmentData.status,
    doctor: treatmentData.doctor,
    patient: treatmentData.patient,
  });

  try {
    await treatment.save();
    return treatment;
  } catch (error) {
    throw Error("Error while saving treatment!");
  }
};
