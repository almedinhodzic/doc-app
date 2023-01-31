import { IDoctor } from "../interfaces/IDoctor";
import { IDoctorCreate } from "../interfaces/IDoctorCreate";
import { IUser } from "../interfaces/types/IUser";
import Doctor from "../models/Doctor.model";

export const createDoctor = async (doctorData: IDoctorCreate, user: IUser) => {
  let doctor = new Doctor({
    firstName: doctorData.firstName,
    lastName: doctorData.lastName,
    medicalSpecialty: doctorData.medicalSpecialty,
    gender: doctorData.gender,
    dateOfBirth: doctorData.dateOfBirth,
    university: doctorData.university,
    yearOfGraduation: doctorData.yearOfGraduation,
    user: user,
  });

  try {
    await doctor.save();
    return doctor;
  } catch (error) {
    throw Error("Error while saving doctor!");
  }
};
