import stationLikesModel from "./model.js";

// station primary key, not one from api 
// asking, has this person liked this station?
export const getUserLikesStation = (userId, stationId) => 
stationLikesModel.findOne({user: userId, stationId});

// user can like album
export const userLikesStation = (user, station, stationId) => 
 stationLikesModel.create({ user, station, stationId});

// user can unlike album
export const userUnlikesStation = (userId, stationId) => 
stationLikesModel.deleteOne({user: userId, station: stationId});

// return all the likes records where we have a user
export const getLikesForUser = (userId) =>
stationLikesModel.find({user: userId}).populate("station");
// stationLikesModel.find({user: userId}).populate("station", "name", "networkId");

// find where the station = stationId
// by leaving out additional paramter (e.g. "name"), we get all fields 
export const getLikesForStation = (stationId) =>
stationLikesModel.find({stationId}).populate("user");
