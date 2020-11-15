/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vacationstatus', {
    vacationStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vacationStatus: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'vacationstatus',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "vacationStatusId" },
        ]
      },
    ]
  });
};
