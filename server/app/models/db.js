const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
// connection.connect(error => {
//   if (error) throw error;
//   connection.query("select employee.employeeId, employee.firstName, employee.lastName, employee.phone, vacationstatus.vacationStatus, vacationtype.vacationType, vacation.vacationStartDate, vacation.vacationEndDate from employee join vacation on employee.employeeId = vacation.employeeId join vacationstatus on vacation.vacationStatusId = vacationstatus.vacationStatusId join vacationtype on vacation.vacationTypeId = vacationtype.vacationTypeId where vacationstatus.vacationStatus = 'New Request' order by vacationStartDate", function (err, result, fields) {
//   console.log("Successfully connected to the database.");
//     if (err) throw err;
//     console.log(result);
// });
// });
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});


module.exports = connection;
