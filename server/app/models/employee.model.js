const sql = require("./db.js");
sql.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM employee", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
});
