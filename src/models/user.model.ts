import { IUser } from "#types/auth";
import mongoose from "mongoose";

const user = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", user);
//users
export default User;
