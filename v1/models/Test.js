class Test {
  constructor() {
    this.conn = require.main.require("./db"); //load DB from root
    this.schema_sample_test =
      (process.env.DB_SCHEMA_SAMPLE || "sample") + ".test";
  }

  //All model objects must pass { next } callback function
  //Get All
  readAll(next) {
    let sql =
      `SELECT 
            testId, 
            testName,
            testCreated,
            testModified
        FROM ` + this.schema_sample_test;

    this.conn.query(sql, (err, result, fields) => {
      if (err) {
        return next(err, false, false);
      }
      next(null, result, fields);
    });
  }

  //Get By testId
  readById(testId, next) {
    let sql =
      `SELECT 
            testId, 
            testName,
            testCreated,
            testModified
        FROM ` +
      this.schema_sample_test +
      ` WHERE testId = ?`;

    this.conn.query(sql, [testId], (err, result, fields) => {
      if (err) {
        return next(err, false, false);
      }
      next(null, result, fields);
    });
  }

  //Test Create
  create(dataObject, next) {
    //REMEMBER: validation must occur in controller
    let sql = `INSERT INTO ` + this.schema_sample_test + ` SET ?`;

    this.conn.query(sql, dataObject, (err, result, fields) => {
      if (err) {
        return next(err, false, false);
      }
      next(null, result, fields);
    });
  }

  //Test Update
  update(testId, dataObject, next) {
    //REMEMBER: validation must occur in controller
    let sql = `UPDATE ` + this.schema_sample_test + ` SET ? WHERE testId = ?`;

    this.conn.query(sql, [dataObject, testId], (err, result, fields) => {
      if (err) {
        return next(err, false, false);
      }
      next(null, result, fields);
    });
  }

  //Test Delete
  delete(testId, next) {
    let sql = `DELETE FROM ` + this.schema_sample_test + ` WHERE testId = ?`;

    this.conn.query(sql, [dataObject, testId], (err, result, fields) => {
      if (err) {
        return next(err, false, false);
      }
      next(null, result, fields);
    });
  }
}

module.exports = new Test();
