const sql = require("./db.js");

const shift = function(shift) {
    this.shiftId = shift.shiftId;
    this.shift = shift.shift
  };