import Treatment from "../models/Treatment.model";
import { Treatment as TreatmentType } from "../types/Treatment";

export const createTreatment = async (
  treatmentData: TreatmentType
): Promise<TreatmentType> => {
  const treatment = new Treatment({
    therapy: treatmentData.therapy,
    dateOfTherapy: treatmentData.dateOfTherapy,
    status: treatmentData.status,
    patient: treatmentData.patient,
  });

  try {
    await treatment.save();
    return treatment;
  } catch (error) {
    throw Error("Error while saving treatment!");
  }
};
