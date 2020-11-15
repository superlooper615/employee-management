const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, env);

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
// db.customer = require('../models/customer.model.js')(sequelize, Sequelize);
db.users = require('../models/user.model.js')(sequelize, Sequelize);
db.useraccount = require('../models/useraccount.model.js')(sequelize, Sequelize);
db.employee = require('../models/employee.model.js')(sequelize, Sequelize);
// db.employeestatus = require('../models/employeestatus.model.js')(sequelize, Sequelize);
// db.employeetype = require('../models/employeetype.model.js')(sequelize, Sequelize);
// db.schedule = require('../models/schedule.model.js')(sequelize, Sequelize);
// db.shift = require('../models/shift.model.js')(sequelize, Sequelize);
// db.vacation = require('../models/vacation.model.js')(sequelize, Sequelize);
// db.vacationstatus = require('../models/vacationstatus.model.js')(sequelize, Sequelize);
// db.vacationtype = require('../models/vacationtype.model.js')(sequelize, Sequelize);

db.ue = db.useraccount.belongsTo(db.employee);
module.exports = db;