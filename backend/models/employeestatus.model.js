module.exports = function(sequelize, Sequelize) {
 
    var employeeStatus = sequelize.define('employeestatus', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        employeeStatus: {
            type: Sequelize.STRING(45),
        }
 
    });
 
    return employeeStatus;
 
}