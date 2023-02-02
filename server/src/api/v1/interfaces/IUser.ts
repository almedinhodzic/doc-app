export interface IUser {
  id: string;
  email: string;
  hashedPassword: string;
  isActive?: boolean;
}
