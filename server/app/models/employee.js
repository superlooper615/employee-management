/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee', {
    employeeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    employeeTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'employeetype',
        key: 'employeeTypeId'
      }
    },
    employeeStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'employeestatus',
        key: 'employeeStatusId'
      }
    }
  }, {
    sequelize,
    tableName: 'employee',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "employeeId" },
        ]
      },
      {
        name: "employeeTypeId_idx",
        using: "BTREE",
        fields: [
          { name: "employeeTypeId" },
        ]
      },
      {
        name: "employeeStatusId_idx",
        using: "BTREE",
        fields: [
          { name: "employeeStatusId" },
        ]
      },
    ]
  });
};
