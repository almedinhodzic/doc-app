import { IDoctor } from "./IDoctor";

export type IPatient = {
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  gender?: string;
  doctor: IDoctor;
};
