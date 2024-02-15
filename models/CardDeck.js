const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class CardDeck extends Model {}

CardDeck.init(
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
    deck_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Deck",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "card_deck",
  }
);

module.exports = CardDeck;
