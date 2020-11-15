/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('boatstatus', {
    boatStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    boatStatus: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'boatstatus',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "boatStatusId" },
        ]
      },
    ]
  });
};
