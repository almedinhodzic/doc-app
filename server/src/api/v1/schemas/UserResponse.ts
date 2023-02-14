export class UserResponse {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  licence: string;
  dateOfBirth?: Date;
  medicalSpecialty: string;
  yearOfGraduation?: number;
  university?: string;
  gender?: string;
  constructor(
    _id: string,
    email: string,
    firstName: string,
    lastName: string,
    licence: string,
    medicalSpecialty: string,
    yearOfGraduation?: number,
    dateOfBirth?: Date,
    university?: string,
    gender?: string
  ) {
    this._id = _id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.licence = licence;
    this.dateOfBirth = dateOfBirth;
    this.medicalSpecialty = medicalSpecialty;
    this.yearOfGraduation = yearOfGraduation;
    this.university = university;
    this.gender = gender;
  }
}
