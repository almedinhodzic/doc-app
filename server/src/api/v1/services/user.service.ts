import { User as UserType } from "../interfaces/types/User";
import { UserCreate as UserCreateType } from "../interfaces/types/UserCreate";
import User from "../models/User.model";

export const getUserByEmail = async (
  email: string
): Promise<UserType | null> => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    throw Error("Error while searching users by email!");
  }
};

export const getUserById = async (id: string): Promise<UserType | null> => {
  try {
    const user = await User.findOne({ _id: id });
    return user;
  } catch (error) {
    throw Error("Error while searching users by id!");
  }
};

export const createUser = async ({
  email,
  password,
  firstName,
  lastName,
  licence,
  dateOfBirth,
  medicalSpecialty,
  gender,
  university,
  yearOfGraduation,
}: UserCreateType): Promise<UserType | null> => {
  const user = new User({
    email,
    hashedPassword: password,
    firstName,
    lastName,
    licence,
    dateOfBirth,
    medicalSpecialty,
    gender,
    university,
    yearOfGraduation,
  });

  try {
    await user.save();
    return user;
  } catch (error) {
    throw Error("Error while saving user!");
  }
};

export const getAllUsers = async (): Promise<UserType[]> => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw Error("Error while fetching all users!");
  }
};

export const removeUser = async (id: string) => {
  try {
    await User.findByIdAndRemove(id);
  } catch (error) {
    throw Error("Error while deleting user!");
  }
};
