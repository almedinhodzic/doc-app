import { IDoctor } from "../interfaces/IDoctor";
import { IPatientCreate } from "../interfaces/IPatientCreate";
import Patient from "../models/Patient.model";

export const createPatient = async (
  patientData: IPatientCreate,
  doctor: IDoctor
) => {
  const patient = new Patient({
    firstName: patientData.firstName,
    lastName: patientData.lastName,
    gender: patientData.gender,
    dateOfBirth: patientData.dateOfBirth,
    doctor,
  });

  try {
    patient.save();
    return patient;
  } catch (error) {
    throw Error("Error while saving doctor!");
  }
};
