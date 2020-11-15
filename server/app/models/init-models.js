var DataTypes = require("sequelize").DataTypes;
var _boat = require("./boat");
var _boatrental = require("./boatrental");
var _boatrentalstatus = require("./boatrentalstatus");
var _boatstatus = require("./boatstatus");
var _boatstatusschedule = require("./boatstatusschedule");
var _customer = require("./customer");
var _customers = require("./customers");
var _employee = require("./employee");
var _employeeschedule = require("./employeeschedule");
var _employeestatus = require("./employeestatus");
var _employeetype = require("./employeetype");
var _schedule = require("./schedule");
var _shift = require("./shift");
var _useraccount = require("./useraccount");
var _users = require("./users");
var _vacation = require("./vacation");
var _vacationstatus = require("./vacationstatus");
var _vacationtype = require("./vacationtype");

function initModels(sequelize) {
  var boat = _boat(sequelize, DataTypes);
  var boatrental = _boatrental(sequelize, DataTypes);
  var boatrentalstatus = _boatrentalstatus(sequelize, DataTypes);
  var boatstatus = _boatstatus(sequelize, DataTypes);
  var boatstatusschedule = _boatstatusschedule(sequelize, DataTypes);
  var customer = _customer(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var employee = _employee(sequelize, DataTypes);
  var employeeschedule = _employeeschedule(sequelize, DataTypes);
  var employeestatus = _employeestatus(sequelize, DataTypes);
  var employeetype = _employeetype(sequelize, DataTypes);
  var schedule = _schedule(sequelize, DataTypes);
  var shift = _shift(sequelize, DataTypes);
  var useraccount = _useraccount(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var vacation = _vacation(sequelize, DataTypes);
  var vacationstatus = _vacationstatus(sequelize, DataTypes);
  var vacationtype = _vacationtype(sequelize, DataTypes);

  boatrental.belongsTo(boatrentalstatus, { foreignKey: "boatRentalStatusId"});
  boatrentalstatus.hasMany(boatrental, { foreignKey: "boatRentalStatusId"});
  boatrental.belongsTo(boat, { foreignKey: "boatId"});
  boat.hasMany(boatrental, { foreignKey: "boatId"});
  boatrental.belongsTo(employee, { foreignKey: "employeeId"});
  employee.hasMany(boatrental, { foreignKey: "employeeId"});
  boatrental.belongsTo(customer, { foreignKey: "customerId"});
  customer.hasMany(boatrental, { foreignKey: "customerId"});
  boatstatusschedule.belongsTo(schedule, { foreignKey: "scheduleId"});
  schedule.hasMany(boatstatusschedule, { foreignKey: "scheduleId"});
  boatstatusschedule.belongsTo(boat, { foreignKey: "boatId"});
  boat.hasMany(boatstatusschedule, { foreignKey: "boatId"});
  boatstatusschedule.belongsTo(boatstatus, { foreignKey: "boatStatusId"});
  boatstatus.hasMany(boatstatusschedule, { foreignKey: "boatStatusId"});
  employee.belongsTo(employeetype, { foreignKey: "employeeTypeId"});
  employeetype.hasMany(employee, { foreignKey: "employeeTypeId"});
  employee.belongsTo(employeestatus, { foreignKey: "employeeStatusId"});
  employeestatus.hasMany(employee, { foreignKey: "employeeStatusId"});
  employeeschedule.belongsTo(employee, { foreignKey: "employeeId"});
  employee.hasMany(employeeschedule, { foreignKey: "employeeId"});
  employeeschedule.belongsTo(schedule, { foreignKey: "scheduleId"});
  schedule.hasMany(employeeschedule, { foreignKey: "scheduleId"});
  schedule.belongsTo(shift, { foreignKey: "shiftId"});
  shift.hasMany(schedule, { foreignKey: "shiftId"});
  useraccount.belongsTo(employee, { foreignKey: "employeeId"});
  employee.hasMany(useraccount, { foreignKey: "employeeId"});
  vacation.belongsTo(employee, { foreignKey: "employeeId"});
  employee.hasMany(vacation, { foreignKey: "employeeId"});
  vacation.belongsTo(vacationtype, { foreignKey: "vacationTypeId"});
  vacationtype.hasMany(vacation, { foreignKey: "vacationTypeId"});
  vacation.belongsTo(vacationstatus, { foreignKey: "vacationStatusId"});
  vacationstatus.hasMany(vacation, { foreignKey: "vacationStatusId"});

  return {
    boat,
    boatrental,
    boatrentalstatus,
    boatstatus,
    boatstatusschedule,
    customer,
    customers,
    employee,
    employeeschedule,
    employeestatus,
    employeetype,
    schedule,
    shift,
    useraccount,
    users,
    vacation,
    vacationstatus,
    vacationtype,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
