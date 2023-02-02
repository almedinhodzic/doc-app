import { IDoctor } from "./IDoctor";

export interface IPatient {
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  gender?: string;
  doctor: IDoctor;
}
