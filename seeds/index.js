const seedUsers = require("./user-seeds");
const seedCards = require("./card-seeds");
const seedDecks = require("./deck-seeds");
const seedCollections = require("./collection-seeds");
const seedClipboards = require("./clipboard-seeds");
const seedCardDecks = require("./card-deck-seeds");
const seedCardCollections = require("./card-collection-seeds");
const seedCardClipboards = require("./card-clipboard-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n-----Users Seeded =====\n");

  await seedCards();
  console.log("\n-----Cards Seeded =====\n");

  await seedDecks();
  console.log("\n-----Decks Seeded =====\n");

  await seedCollections();
  console.log("\n-----Collections Seeded =====\n");

  await seedClipboards();
  console.log("\n-----Clipboards Seeded =====\n");

  await seedCardDecks();
  console.log("\n-----CardDecks Seeded =====\n");

  await seedCardCollections();
  console.log("\n-----CardCollections Seeded =====\n");

  await seedCardClipboards();
  console.log("\n-----CardClipboards Seeded =====\n");

  process.exit(0);
};

seedAll();
