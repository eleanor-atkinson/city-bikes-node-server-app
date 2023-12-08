import stationSchema from "./schema.js"; 
import mongoose from "mongoose";

const stationModel = mongoose.model("stations", stationSchema)

export default stationModel; 