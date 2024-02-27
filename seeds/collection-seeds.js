const { Collection } = require("../models");

const collectionData = [
  {
    user_id: 1,
  },
  {
    user_id: 2,
  },
  {
    user_id: 3,
  },
];

const seedCollections = () => Collection.bulkCreate(collectionData);

module.exports = seedCollections;
