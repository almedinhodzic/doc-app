import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/types/IUser";

const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      index: true,
      required: true,
      unique: true,
    },
    hashedPassword: {
      type: String,
      required: true,
      minLength: 6,
    },
    isActive: Boolean,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
