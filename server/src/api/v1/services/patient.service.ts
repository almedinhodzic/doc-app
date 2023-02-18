// import { PatientCreate } from "../interfaces/PatientCreate";
// import Patient from "../models/Patient.model";

// export const createPatient = async (
//   patientData: PatientCreate,
//   doctor: IDoctor
// ) => {
//   const patient = new Patient({
//     firstName: patientData.firstName,
//     lastName: patientData.lastName,
//     gender: patientData.gender,
//     dateOfBirth: patientData.dateOfBirth,
//     doctor,
//   });
//
//   try {
//     patient.save();
//     return patient;
//   } catch (error) {
//     throw Error("Error while saving doctor!");
//   }
// };
