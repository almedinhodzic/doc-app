// import { Request, Response } from "express";
// import { PatientCreate } from "../interfaces/PatientCreate";

// export const postPatient = async (req: Request, res: Response) => {
//   const {
//     firstName,
//     lastName,
//     gender,
//     dateOfBirth,
//     doctor_id,
//   }: PatientCreate = req.body;
//
//   try {
//     // const patient = await createPatient({
//     //   firstName,
//     //   lastName,
//     //   dateOfBirth,
//     //   gender,
//     //   doctor_id,
//     // });
//     const patient = {
//       firstName,
//       lastName,
//       dateOfBirth,
//       gender,
//       doctor_id,
//     };
//     res.json({ data: patient });
//   } catch (error) {
//     res.status(500).send("Server error!");
//   }
// };
