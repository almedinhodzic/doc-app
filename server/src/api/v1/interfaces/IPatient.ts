import { IUser } from "./types/User";

export type IPatient = {
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  gender?: string;
  doctor: IUser;
};
