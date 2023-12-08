// const express = require('express') // equivalent to import, not using because we changed package.json to allow import
import express from 'express';
import cors from 'cors';  // Import the cors middleware
import session from 'express-session';
import mongoose from 'mongoose';
import UserRoutes from './users/routes.js';
import StationLikesRoutes from './stationLikes/routes.js';

mongoose.connect('mongodb://127.0.0.1:27017/city-bikes');

const app = express();
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);

const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
app.use(
    session(sessionOptions)
);

app.use(express.json());

UserRoutes(app);
StationLikesRoutes(app);

app.listen(process.env.PORT || 4000);



// app.use(cors());
// app.use(express.json()); // configure the Node.js server to parse JSON from the body of incoming HTTP requests 

// dotenv.config();

// mongoose.connect(
//   process.env.DATA_DB || "mongodb://127.0.0.1:27017/city-bikes"
// );

// const app = express() // create new express instance
// app.use(
//     cors({
//       credentials: true,
//       origin: process.env.CORS_ORIGIN || "http://localhost:3000",
//     })
//   );
//   const sessionOptions = {
//     secret: process.env.supersecretpassword || "super secret password",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       secure: false,
//     },
//   };
//   if (process.env.NODE_ENV && process.env.NODE_ENV !== "development") {
//     sessionOptions.proxy = true;
//     sessionOptions.cookie = {
//       sameSite: "none",
//       secure: true,
//     };
//     app.set("trust proxy", 1);
//   }
//   app.use(session(sessionOptions));
//   app.use(express.json());


// app.listen(process.env.PORT || 4000); // listen to http://localhost:4000 or env