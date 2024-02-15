const User = require("./user");
const Deck = require("./deck");
const Clipboard = require("./clipboard");
const Card = require("./card");
const Collection = require("./collection");
const CardCollection = require("./CardCollection");
const CardDeck = require("./CardDeck");
const CardClipboard = require("./CardClipboard");

User.hasOne(Clipboard, {
  foreignKey: "user_id",
});
Clipboard.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasOne(Collection, {
  foreignKey: "user_id",
});
Collection.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Deck, {
  foreignKey: "user_id",
});
Deck.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Card.belongsToMany(Collection, { through: CardCollection });
Collection.belongsToMany(Card, { through: CardCollection });

Card.belongsToMany(Deck, { through: CardDeck });
Deck.belongsToMany(Card, { through: CardDeck });

Card.belongsToMany(Clipboard, { through: CardClipboard });
Clipboard.belongsToMany(Card, { through: CardClipboard });

module.exports = {
  User,
  Deck,
  Clipboard,
  Card,
  Collection,
  CardCollection,
  CardDeck,
  CardClipboard,
};
