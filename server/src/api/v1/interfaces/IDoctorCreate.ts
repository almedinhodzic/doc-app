export type IDoctorCreate = {
  firstName: string;
  lastName: string;
  medicalSpecialty: string;
  dateOfBirth?: Date;
  yearOfGraduation?: number;
  university?: string;
  gender?: string;
  user_id: string;
};
