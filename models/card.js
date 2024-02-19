const { Model, DataTypes, INTEGER } = require("sequelize");
const sequelize = require("../config/connection");

class Card extends Model {}

Card.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    collection_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      reference: {
        model: "collection",
        key: "id",
      },
    },
    clipboard_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      reference: {
        model: "clipboard",
        key: "id",
      },
    },
    deck_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      reference: {
        model: "deck",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "card",
  }
);
module.exports = Card;
