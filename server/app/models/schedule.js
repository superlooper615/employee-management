/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('schedule', {
    scheduleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    scheduleDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    shiftId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'shift',
        key: 'shiftId'
      }
    }
  }, {
    sequelize,
    tableName: 'schedule',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "scheduleId" },
        ]
      },
      {
        name: "employeeId_idx",
        using: "BTREE",
        fields: [
          { name: "scheduleDate" },
        ]
      },
      {
        name: "shiftId_idx",
        using: "BTREE",
        fields: [
          { name: "shiftId" },
        ]
      },
    ]
  });
};
