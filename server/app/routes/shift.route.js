module.exports = app => {
    const shiftRoute = require("../controllers/shift.controller.js");
    app.get("/shift", shiftRoute.findAll);
}  