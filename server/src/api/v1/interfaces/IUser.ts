export type IUser = {
  id: string;
  email: string;
  hashedPassword: string;
  isActive?: boolean;
  firstName: string;
  lastName: string;
  licence: string;
  medicalSpecialty: string;
  dateOfBirth: Date;
  yearOfGraduation?: number;
  university?: string;
  gender?: string;
};
