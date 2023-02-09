import { IDoctor } from "./IDoctor";
import { IPatient } from "./IPatient";

export type ITreatment = {
  id: string;
  therapy: string;
  dateOfTherapy: Date;
  status: string;
  doctor: IDoctor;
  patient: IPatient;
};
