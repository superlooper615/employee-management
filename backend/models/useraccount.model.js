module.exports = function(sequelize, Sequelize) {
 
    var useraccount= sequelize.define('useraccount', {
 
        userAccountId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        employeeId: {
            type: Sequelize.INTEGER
        },
 
        username: {
            type: Sequelize.STRING(45)
        },
 
        password: {
            type: Sequelize.STRING(45),
            allowNull: false
        },
    }
    );
 
    return useraccount;
 
}