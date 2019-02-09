require("dotenv").config();
const express = require("express");
const api = express();

const v1 = require("./v1/Router");
//const v2 = require("./v2/Router"); // see v2 below

api.use(express.json()); //parse json body

//Define Versioning Routers
api.use("/v1", v1);
//api.use("/v2", v2); //clone v1 structure and rename to v2 to start a new version then uncomment this line. Same procedure for v3, v4 etc
//Define Default Versioning Router if no version is passed
api.use("/", v1);

module.exports = api;
