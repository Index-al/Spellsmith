const { CardCollection } = require("../models");
const cardCollectionData = [
  {
    card_id: 1,
    collection_id: 1,
  },
  {
    card_id: 2,
    collection_id: 1,
  },
  {
    card_id: 3,
    collection_id: 1,
  },
  {
    card_id: 1,
    collection_id: 2,
  },
  {
    card_id: 2,
    collection_id: 2,
  },
  {
    card_id: 3,
    collection_id: 3,
  },
];
const seedCardCollections = () => CardCollection.bulkCreate(cardCollectionData);

module.exports = seedCardCollections;
