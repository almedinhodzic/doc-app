import User from "../models/User.model";

export const getUserByEmail = async (email: string) => {
  try {
    let user = await User.findOne({ email });
    return user;
  } catch (error) {
    throw Error("Error while searching users by email!");
  }
};

export const createUser = async (email: string, hashedPassword: string) => {
  let user = new User({ email, hashedPassword });

  try {
    await user.save();
    return user;
  } catch (error) {
    throw Error("Error while saving user!");
  }
};
