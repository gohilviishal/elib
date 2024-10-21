import mongoose from "mongoose";
import { IUser } from "./userTypes";

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

//users
export default mongoose.model<IUser>("User", user);
