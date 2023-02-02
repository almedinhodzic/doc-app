import { IDoctor } from "../interfaces/IDoctor";
import { IDoctorCreate } from "../interfaces/IDoctorCreate";
import { IUser } from "../interfaces/IUser";
import Doctor from "../models/Doctor.model";

export const createDoctor = async (
  doctorData: IDoctorCreate,
  user: IUser
): Promise<IDoctor> => {
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

export const getDoctorById = async (id: string): Promise<IDoctor | null> => {
  console.log(id);
  try {
    const doctor = await Doctor.findById(id);
    return doctor;
  } catch (error) {
    throw Error("Error while searching doctors by id!");
  }
};

export const getDoctorByEmail = async (
  email: string
): Promise<IDoctor | null> => {
  const doctor = await Doctor.findOne({ email });
  return doctor;
};
