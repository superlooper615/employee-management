/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeeschedule', {
    employeescheduleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employeeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'employee',
        key: 'employeeId'
      }
    },
    scheduleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'schedule',
        key: 'scheduleId'
      }
    }
  }, {
    sequelize,
    tableName: 'employeeschedule',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "employeescheduleId" },
        ]
      },
      {
        name: "employeeId_idx",
        using: "BTREE",
        fields: [
          { name: "employeeId" },
        ]
      },
      {
        name: "scheduleId_idx",
        using: "BTREE",
        fields: [
          { name: "scheduleId" },
        ]
      },
    ]
  });
};
