import { IUser } from "./IUser";

export type IDoctor = {
  firstName: string;
  lastName: string;
  medicalSpecialty: string;
  dateOfBirth?: Date;
  yearOfGraduation?: number;
  university?: string;
  gender?: string;
  user: IUser;
};
