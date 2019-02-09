const testModel = require("../models/Test");
const uuidV4 = require("uuid/v4");

//GET All tests
exports.test_read_all = (req, res) => {
  //fields, 3rd argument not required, except for debugging or loggin
  testModel.readAll((err, payload, fields) => {
    //log system is integrated with customHandler 4th param err
    if (err) return res.customHandler(500, false, "DB Error.", err);
    return res.customHandler(200, true, payload);
  });
};

//GET test By Id
exports.test_read_by_id = (req, res) => {
  //company realm signed up to this microsevice and with READ permission, use middleware to validate:
  testModel.readById(req.params.testId, (err, payload) => {
    if (err) return res.customHandler(500, false, "DB Error.", err);
    return res.customHandler(200, true, payload[0]);
  });
};

//POST test Create
exports.test_create = (req, res) => {
  //company realm signed up to this microsevice and with WRITE permission, use middleware to validate:
  //set invoideId
  req.body.testId = uuidV4();
  //set testCreated date
  req.body.testCreated = Date.now();
  testModel.create(req.body, (err, payload) => {
    if (err) return res.customHandler(500, false, "DB Error.", err);
    return res.customHandler(200, true, {
      testId: req.body.testId
    });
  });
};

//PATCH test Update
exports.test_update = (req, res) => {
  //set testModified date
  req.body.testModified = Date.now();

  testModel.update(req.params.testId, req.body, (err, payload) => {
    if (err) return res.customHandler(500, false, "DB Error.", err);
    return res.customHandler(200, true, {
      message: "ok"
    });
  });
};

//DELETE test Delete
exports.test_delete = (req, res) => {
  testModel.delete(req.params.testId, (err, payload) => {
    if (err) return res.customHandler(500, false, "DB Error.", err);
    return res.customHandler(200, true, {
      message: "ok"
    });
  });
};
