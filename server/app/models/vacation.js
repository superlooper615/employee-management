/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vacation', {
    vacationId: {
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
    vacationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'vacationtype',
        key: 'vacationTypeId'
      }
    },
    vacationStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'vacationstatus',
        key: 'vacationStatusId'
      }
    },
    vacationStartDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    vacationEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vacation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "vacationId" },
        ]
      },
      {
        name: "vacationStatusId_idx",
        using: "BTREE",
        fields: [
          { name: "vacationStatusId" },
        ]
      },
      {
        name: "vacationTypeId_idx",
        using: "BTREE",
        fields: [
          { name: "vacationTypeId" },
        ]
      },
      {
        name: "employeeId_idx",
        using: "BTREE",
        fields: [
          { name: "employeeId" },
        ]
      },
    ]
  });
};
