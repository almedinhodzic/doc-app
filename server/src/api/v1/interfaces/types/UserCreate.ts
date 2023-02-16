import { UserBase } from "./UserBase";

export type UserCreate = {
  email: string;
  password: string;
  dateOfBirth: Date;
} & UserBase;
