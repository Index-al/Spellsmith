const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class CardClipboard extends Model {}

CardClipboard.init(
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
    clipboard_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Clipboard",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "card_clipboard",
  }
);

module.exports = CardClipboard;
