import { User as UserType } from "../types/User";
import { UserCreate as UserCreateType } from "../types/UserCreate";
import User from "../models/User.model";
import { UserUpdate } from "../types/UserUpdate";

export const getUserByEmail = async (
  email: string
): Promise<UserType | null> => {
  try {
    return await User.findOne({ email });
  } catch (error) {
    throw Error("Error while searching users by email!");
  }
};

export const getUserById = async (id: string): Promise<UserType | null> => {
  try {
    return await User.findOne({ _id: id });
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
    return await User.find();
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

export const modifyUser = async ({ id, firstName, lastName }: UserUpdate) => {
  try {
    return await User.findOneAndUpdate({ id, firstName, lastName });
  } catch (e) {
    throw Error("Error while updating user!");
  }
};
