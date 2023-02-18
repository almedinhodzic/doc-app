export type PatientCreate = {
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  gender?: string;
  doctor_id: string;
};
