import mongoose from "mongoose";
import stationLikesSchema from "./schema.js";

const stationLikesModel = mongoose.model("stationLikes", stationLikesSchema )

export default stationLikesModel; 