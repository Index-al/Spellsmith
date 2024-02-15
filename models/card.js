const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Card extends Model {}

Card.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: "user",
        key: "id",
      },
    },
    mana_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deck_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "deck",
        key: "id",
      },
    },
    wishlist_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "clipboard",
        key: "id",
      },
    },
    collection_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "collection",
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNule: false,
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
