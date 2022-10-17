const sqldb = require("mysql2");
const db = sqldb.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cars"
});
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("SQL:200");
});
module.exports = db;