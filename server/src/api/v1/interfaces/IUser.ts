export type IUser = {
  id: string;
  email: string;
  hashedPassword: string;
  isActive?: boolean;
};
