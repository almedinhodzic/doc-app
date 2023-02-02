import { Request, Response } from "express";
import { IDoctorCreate } from "../interfaces/IDoctorCreate";
import { createDoctor } from "../services/doctor.service";
import { getUserById } from "../services/user.service";

export const postDoctor = async (req: Request, res: Response) => {
  const {
    firstName,
    lastName,
    medicalSpecialty,
    dateOfBirth,
    yearOfGraduation,
    university,
    gender,
    user_id,
  }: IDoctorCreate = req.body;

  try {
    const user = await getUserById(user_id);

    if (!user) {
      return res.status(400).json({ msg: "Doctor can not be created!" });
    }

    const doctor = await createDoctor(
      {
        firstName,
        lastName,
        medicalSpecialty,
        dateOfBirth,
        yearOfGraduation,
        university,
        gender,
        user_id,
      },
      user
    );
    res.json({ data: doctor });
  } catch (error) {
    res.status(500).send("Server error!");
  }
};
