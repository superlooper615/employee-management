/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('boatstatusschedule', {
    boatStatusScheduleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    scheduleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'schedule',
        key: 'scheduleId'
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
    boatStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'boatstatus',
        key: 'boatStatusId'
      }
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'boatstatusschedule',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "boatStatusScheduleId" },
        ]
      },
      {
        name: "boatId_idx",
        using: "BTREE",
        fields: [
          { name: "boatId" },
        ]
      },
      {
        name: "boatStatusId_idx",
        using: "BTREE",
        fields: [
          { name: "boatStatusId" },
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
