class _Errors {
  constructor() {
    this.conn = require.main.require("./db"); //load DB from root
    this.schema_sample = process.env.DB_SCHEMA_SAMPLE || "sample";
  }

  //All model objects must pass { next } callback function
  //Get All
  write(id, data, created) {
    let sql =
      `INSERT INTO ` +
      this.schema_sample +
      `._errors ` +
      `(id,data,created) VALUES( ?,?,?)`;
    this.conn.query(sql, [id, data, created]);
  }
}

module.exports = new _Errors();
