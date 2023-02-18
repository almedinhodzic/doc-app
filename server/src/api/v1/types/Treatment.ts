import { Patient } from "./Patient";

export type Treatment = {
  id: string;
  therapy: string;
  dateOfTherapy: Date;
  status: string;
  patient: Patient;
};
