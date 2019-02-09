const express = require("express");
const routes = express();
const uuidV4 = require("uuid/v4");
//Custom response handler with error log system
const customHandler = require("./middleware/ResponseHandler");

//use Global Response Payload
routes.use(customHandler);

//DEFINE ROUTES
routes.use("/company", require("./routes/Company"));

//EndPoint Error Handler
routes.all(
  "*",
  express.Router().all("*", (req, res) => {
    res.customHandler(404, false, "The requested resource was not found.");
  })
);

module.exports = routes;
