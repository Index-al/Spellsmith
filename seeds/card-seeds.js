const { Card } = require("../models");

const cardData = [
  {
    id: "a31ffc9e-d21b-4a8f-ac67-695e38e09e3b",
    name: "Austere Command",
    collection_id: 1,
    deck_id: 1,
  },
  {
    id: "afee5464-83b7-4d7a-b407-9ee7de21535b.jpg?1562791607",
    name: "Goblin Guide",
    collection_id: 1,
    deck_id: 1,
  },
  {
    id: "42f829be-d4f5-4231-a45d-1869222e5e24.jpg?1562908842",
    name: "Force of Will",
    collection_id: 1,
    deck_id: 1,
  },
];

const seedCards = async () => Card.bulkCreate(cardData);

module.exports = seedCards;
