const mysql = require("mysql");
const db = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "your@user",
  password: process.env.DB_PASS || "your@password",
  port: process.env.DB_PORT || 3306,
  debug: false
});

db.getConnection((err, conn) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("DB: connection established. Thread id - " + conn.threadId);
});

module.exports = db;
