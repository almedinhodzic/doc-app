import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/IUser";

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
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    medicalSpecialty: {
      type: String,
      required: true,
    },
    licence: String,
    dateOfBirth: Date,
    yearOfGraduation: Number,
    university: String,
    gender: String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
