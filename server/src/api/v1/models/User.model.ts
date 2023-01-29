import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
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
    roles: [String],
    isActive: Boolean,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
