const { CardDeck } = require("../models");

const cardDeckData = [
  {
    card_id: 1,
    deck_id: 1,
  },
  {
    card_id: 2,
    deck_id: 1,
  },
  {
    card_id: 3,
    deck_id: 1,
  },
  {
    card_id: 1,
    deck_id: 2,
  },
  {
    card_id: 2,
    deck_id: 2,
  },
  {
    card_id: 3,
    deck_id: 3,
  },
];
const seedCardDecks = () => CardDeck.bulkCreate(cardDeckData);

module.exports = seedCardDecks;
