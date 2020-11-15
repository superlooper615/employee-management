/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('boatrental', {
    boatRentalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    boatRentalStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'boatrentalstatus',
        key: 'boatRentalStatusId'
      }
    },
    boatId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'boat',
        key: 'boatId'
      }
    },
    employeeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'employee',
        key: 'employeeId'
      }
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customer',
        key: 'customerId'
      }
    },
    bookingDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    bookingTime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    passengers: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    requestedCoolers: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    specialNotes: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'boatrental',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "boatRentalId" },
        ]
      },
      {
        name: "boatRentalStatusId_idx",
        using: "BTREE",
        fields: [
          { name: "boatRentalStatusId" },
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
        name: "customerId_idx",
        using: "BTREE",
        fields: [
          { name: "customerId" },
        ]
      },
      {
        name: "boatId_idx",
        using: "BTREE",
        fields: [
          { name: "boatId" },
        ]
      },
    ]
  });
};
