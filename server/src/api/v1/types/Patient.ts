import { User } from "./User";

export type Patient = {
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  gender?: string;
  doctor: User;
};
