import { Request, Response } from "express";
import { IPatientCreate } from "../interfaces/IPatientCreate";
import { getDoctorById } from "../services/doctor.service";
import { createPatient } from "../services/patient.service";

export const postPatient = async (req: Request, res: Response) => {
  const {
    firstName,
    lastName,
    gender,
    dateOfBirth,
    doctor_id,
  }: IPatientCreate = req.body;

  const doctor = await getDoctorById(doctor_id);
  console.log(doctor);

  if (!doctor) {
    return res.status(400).json({ msg: "Patient can not be created!" });
  }

  try {
    const patient = await createPatient(
      {
        firstName,
        lastName,
        dateOfBirth,
        gender,
        doctor_id,
      },
      doctor
    );
    res.json({ data: patient });
  } catch (error) {
    res.status(500).send("Server error!");
  }
};
