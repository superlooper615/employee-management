const sql = require("./db.js");

const shift = function(shift) {
    this.shiftId = shift.shiftId;
    this.shift = shift.shift
  };


  shift.getAll = result =>{
      sql.query("SELECT * FROM employee.shift",(err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        
        console.log("shift: ", res);
    result(null, res);
    })
  }