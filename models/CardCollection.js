const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class CardCollection extends Model {}

CardCollection.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    card_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Card",
        key: "id",
      },
    },
    collection_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Collection",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "card_collection",
  }
);

module.exports = CardCollection;
