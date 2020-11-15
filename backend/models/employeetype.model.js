module.exports = function(sequelize, Sequelize) {
 
    var employeeType = sequelize.define('employeeType', {
 
        employeeTypeId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        employeeType: {
            type: Sequelize.STRING(45)
        }
 
 
    });
 
    return employeeType;
 
}