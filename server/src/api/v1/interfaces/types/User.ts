import { UserBase } from "./UserBase";

export type User = {
  id: string;
  email: string;
  hashedPassword: string;
  isActive?: boolean;
  dateOfBirth: Date;
} & UserBase;
