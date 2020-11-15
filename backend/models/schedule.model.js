module.exports = function(sequelize, Sequelize) {
 
    var schedule = sequelize.define('schedule', {
 
        scheduleId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        employeeId:{
            type: Sequelize.INTEGER
        },

        shiftId:{
                type: Sequelize.INTEGER
            },  

        scheduleDate: {
                type: Sequelize.DATEONLY
            },
    }, 
    {
        indexes:[
            {
                unique:false,
                fields:["shiftId" ]
            },
            {
                unique:false,
                fields:["employeeId" ]
            }
        ]
    });
 
    return schedule;
 
}