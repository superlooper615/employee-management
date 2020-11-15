module.exports = function(sequelize, Sequelize) {
 
    var vacation = sequelize.define('vacation', {
 
        vacationId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        employeeId:{
            type: Sequelize.INTEGER
        },
        vacationTypeId:{
            type: Sequelize.INTEGER
        },
        vacationStatusId:{
            type: Sequelize.INTEGER
        },
        vacationStartDate:{
            type: Sequelize.DATEONLY
        },
        vacationEndDate:{
            type: Sequelize.DATEONLY
        },
 
    },   {
        indexes:[
            {
                unique:false,
                fields:["employeeId"]
            },
            {
                unique:false,
                fields:["vacationTypeId"]
            },
            {
                unique:false,
                fields:["vacationStatusId"]
            }
        ]
    });
 
    return vacation;
 
}