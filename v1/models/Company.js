class Company {
  constructor() {
    this.conn = require.main.require("./db"); //load DB from root
    this.schema_company =
      (process.env.DB_SCHEMA_COMPANY || "company") + ".company";
  }

  //All model objects must pass { next } callback function
  //Get All
  readAll(next) {
    let sql =
      `SELECT 
            *
        FROM ` + this.schema_company;

    this.conn.query(sql, (err, result, fields) => {
      if (err) {
        return next(err, false, false);
      }
      next(null, result, fields);
    });
  }

  //Get By companyId
  readById(companyId, next) {
    let sql =
      `SELECT 
            *
        FROM ` +
      this.schema_company +
      ` WHERE companyId = ?`;

    this.conn.query(sql, [companyId], (err, result, fields) => {
      if (err) {
        return next(err, false, false);
      }
      next(null, result, fields);
    });
  }

  //Company Create
  create(dataObject, next) {
    //REMEMBER: validation must occur in controller
    let sql = `INSERT INTO ` + this.schema_company + ` SET ?`;

    this.conn.query(sql, dataObject, (err, result, fields) => {
      if (err) {
        return next(err, false, false);
      }
      next(null, result, fields);
    });
  }

  //Company Update
  update(companyId, dataObject, next) {
    //REMEMBER: validation must occur in controller
    let sql = `UPDATE ` + this.schema_company + ` SET ? WHERE companyId = ?`;

    this.conn.query(sql, [dataObject, companyId], (err, result, fields) => {
      if (err) {
        return next(err, false, false);
      }
      next(null, result, fields);
    });
  }

  //Company Delete
  delete(companyId, next) {
    let sql = `DELETE FROM ` + this.schema_company + ` WHERE companyId = ?`;

    this.conn.query(sql, [dataObject, companyId], (err, result, fields) => {
      if (err) {
        return next(err, false, false);
      }
      next(null, result, fields);
    });
  }
}

module.exports = new Company();
