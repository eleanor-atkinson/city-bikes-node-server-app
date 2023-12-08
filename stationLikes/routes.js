; import * as likesDao from "./dao.js";
import * as stationDao from "../stations/dao.js"

function StationLikesRoutes(app) {

    const userLikesStation = async (req, res) => {
        const currentUser = req.session.currentUser;
        if (!currentUser) {
            res.sendStatus(401);
            return;
        }
        const userId = currentUser._id;
        const stationId = req.params["stationId"];

        // has this user id already liked the station id? 
        const likes = await likesDao.getUserLikesStation(userId, stationId);
        if (likes) {
            res.sendStatus(200);
            return;
        }

        // does station exist? 
        let station = await stationDao.getStationByStationId(stationId);
        if (!station) {
            station = await stationDao.createStation(req.body);
        }

        const actualLikes = await likesDao.userLikesStation(userId, station._id, stationId);
        res.json(actualLikes);
    };

    // retrieve whether or not person likes station?
    const getLikesForUser = async (req, res) => {
        const userId = req.params.userId;
        const likes = await likesDao.getLikesForUser(userId);
        res.json(likes);
    };
    const getLikesForStation = async(req, res) => {
        const stationId = req.params.stationId;
        const likes = await likesDao.getLikesForStation(stationId);
        res.json(likes);
    }

    // get likes for station
    app.get("/api/stations/:stationId/likes", getLikesForStation);

    // if you give me the userId, then I will return the likes
    app.get("/api/users/:userId/likes", getLikesForUser);

    // create the like
    app.post("/api/stations/:stationId/likes", userLikesStation);

    

}

export default StationLikesRoutes;