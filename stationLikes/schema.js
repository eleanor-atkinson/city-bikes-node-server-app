import mongoose from "mongoose";

const stationLikesSchema = new mongoose.Schema(
    {
    // foreign key
    station: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "stations",

    },
    // foreign key
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    stationId: String,
    dateOfLike: { type: Date, default: Date.now },
    // networkId: String,
},
    {
        collection: "stationLikes",
    }
);

export default stationLikesSchema; 