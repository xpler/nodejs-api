const uuidV4 = require("uuid/v4");

module.exports = (req, res, next) => {
  //allow CORs
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  //register data structure
  res.customHandler = (status, success, payload, error) => {
    let data = {
      server: {
        api: "Digi-Master-NodeJS-API",
        hostname: req.protocol + "://" + req.get("host"),
        endPoint: req.originalUrl,
        environment: process.env.MODE || "development",
        version: process.env.VERSION || "1.0.0",
        clientIp: req.ip,
        referer: req.headers.referer,
        timestamp: Date.now()
      },
      status: status, // integer: HTTP code
      success: success, // boolean
      payload: payload // mixed: IF success - data | ELSE - error message
    };
    //Async Response
    res.status(status).json(data);

    //log errors if Any
    if (error) {
      data.error = error;
      //store in DB
      const _errors = require("../models/_Errors");
      let time = Date.now();
      let i = uuidV4();
      let d = JSON.stringify(data);
      let t = new Date(time);

      _errors.write(i, d, time);
      console.log(
        "---------------------->\n-- Start Error Log -- \n---------------------->\n\n=> ID: " +
          i +
          "\n\n=> DATA: " +
          d +
          "\n\n=> TIME: " +
          t +
          "\n\nHINT: Lookup in DB _errors by UUID.\n<----------------------\n-- End Error Log --\n<----------------------\n"
      );
    }
  };
  next();
};
