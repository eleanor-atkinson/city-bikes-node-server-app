import mongoose from "mongoose"; 

const stationSchema = new mongoose.Schema({
    name: String, 
    stationId: String, 
}, {collection: "stations" } );

export default stationSchema; 