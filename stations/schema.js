import mongoose from "mongoose"; 

const stationSchema = new mongoose.Schema({
    name: String, 
    stationId: String, 
    networkId: String,
}, {collection: "stations" } );

export default stationSchema; 