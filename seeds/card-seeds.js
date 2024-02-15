const { Card } = require("../models");

const cardData = [
  {
    user_id: 1,
    mana_value: 4,
    deck_id: null,
    clipboard_id: null,
    collection_id: null,
    name: "dragon",
  },
  {
    user_id: 2,
    mana_value: 4,
    deck_id: null,
    clipboard_id: null,
    collection_id: null,
    name: "land",
  },
  {
    user_id: 3,
    mana_value: 4,
    deck_id: null,
    clipboard_id: null,
    collection_id: null,
    name: "artifact",
  },
];

const seedCards = () => Card.bulkCreate(cardData);

module.exports = seedCards;
