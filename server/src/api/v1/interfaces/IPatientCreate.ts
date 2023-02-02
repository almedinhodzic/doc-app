export interface IPatientCreate {
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  gender?: string;
  doctor_id: string;
}
