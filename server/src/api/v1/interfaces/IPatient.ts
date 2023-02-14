import { IUser } from "./IUser";

export type IPatient = {
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  gender?: string;
  doctor: IUser;
};
