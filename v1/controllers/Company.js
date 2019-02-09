const companyModel = require("../models/Company");
const uuidV4 = require("uuid/v4");

//GET All companies
exports.company_read_all = (req, res) => {
  //fields, 3rd argument not required, except for debugging or loggin
  companyModel.readAll((err, payload, fields) => {
    //log system is integrated with customHandler 4th param err
    if (err) return res.customHandler(500, false, "DB Error.", err);
    return res.customHandler(200, true, payload);
  });
};

//GET company By Id
exports.company_read_by_id = (req, res) => {
  //company realm signed up to this microsevice and with READ permission, use middleware to validate:
  companyModel.readById(req.params.companyId, (err, payload) => {
    if (err) return res.customHandler(500, false, "DB Error.", err);
    return res.customHandler(200, true, payload[0]);
  });
};

//POST company Create
exports.company_create = (req, res) => {
  //company realm signed up to this microsevice and with WRITE permission, use middleware to validate:
  //set invoideId
  req.body.companyId = uuidV4();
  //set companyCreated date
  req.body.companyCreated = Date.now();
  companyModel.create(req.body, (err, payload) => {
    if (err) return res.customHandler(500, false, "DB Error.", err);
    return res.customHandler(200, true, {
      companyId: req.body.companyId
    });
  });
};

//PATCH company Update
exports.company_update = (req, res) => {
  //set companyModified date
  req.body.companyModified = Date.now();

  companyModel.update(req.params.companyId, req.body, (err, payload) => {
    if (err) return res.customHandler(500, false, "DB Error.", err);
    return res.customHandler(200, true, {
      message: "ok"
    });
  });
};

//DELETE company Delete
exports.company_delete = (req, res) => {
  companyModel.delete(req.params.companyId, (err, payload) => {
    if (err) return res.customHandler(500, false, "DB Error.", err);
    return res.customHandler(200, true, {
      message: "ok"
    });
  });
};
