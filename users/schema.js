import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    role: {
      type: String,
      default: "user",
      enum: ["user", "moderator"],
    },
    dateOfJoin: { type: Date, default: Date.now() },
  },
  { collection: "users" }
);

export default userSchema;