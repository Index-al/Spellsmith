const { Deck } = require("../models");

const deckData = [
  {
    user_id: 1,
    name: "mydeck",
  },
  {
    user_id: 2,
    name: "mydeck",
  },
  {
    user_id: 3,
    name: "mydeck",
  },
];

const seedDecks = () => Deck.bulkCreate(deckData);

module.exports = seedDecks;
