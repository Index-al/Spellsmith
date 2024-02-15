const { Clipboard } = require("../models");

const clipboardData = [
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

const seedClipboards = () => Clipboard.bulkCreate(clipboardData);

module.exports = seedClipboards;
