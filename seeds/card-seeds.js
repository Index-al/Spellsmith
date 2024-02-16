const { Card } = require("../models");

const cardData = [
  {
    cmc: 4,
    name: "dragon",
  },
  {
    cmc: 4,
    name: "land",
  },
  {
    cmc: 4,
    name: "artifact",
  },
];

const seedCards = async () => Card.bulkCreate(cardData);

module.exports = seedCards;
