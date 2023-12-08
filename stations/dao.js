import stationModel from "./model.js";

export const createStation = (station) => 
    stationModel.create(station);

export const getStations = () => stationModel.find();


export const getStationByStationId = (stationId) => stationModel.findOne({stationId});

// id is a primary key (what we don't control)
export const getStationById = (id) => stationModel.findById(id);

