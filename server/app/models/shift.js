/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shift', {
    shiftId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    shift: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'shift',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shiftId" },
        ]
      },
    ]
  });
};
