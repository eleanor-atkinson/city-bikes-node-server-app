import mongoose from "mongoose";
import userSchema from "./schema.js"

const User = mongoose.model("User", userSchema);

// const User = mongoose.model("users", schema);

export default User; 

