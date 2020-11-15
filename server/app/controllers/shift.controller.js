const shift = require("../models/shiftModel.js")

exports.findAll = (req, res) => {
    shift.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else res.send(data);
      });
};