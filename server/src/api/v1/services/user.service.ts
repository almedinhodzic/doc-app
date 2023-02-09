import { IUser } from "../interfaces/IUser";
import User from "../models/User.model";

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    throw Error("Error while searching users by email!");
  }
};

export const getUserById = async (id: string): Promise<IUser | null> => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw Error("Error while searching users by id!");
  }
};

export const createUser = async (
  email: string,
  hashedPassword: string
): Promise<IUser | null> => {
  const user = new User({ email, hashedPassword });

  try {
    await user.save();
    return user;
  } catch (error) {
    throw Error("Error while saving user!");
  }
};
