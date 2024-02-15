const { CardClipboard } = require("../models");
const cardClipboardData = [
  {
    card_id: 1,
    clipboard_id: 1,
  },
  {
    card_id: 2,
    clipboard_id: 1,
  },
  {
    card_id: 3,
    clipboard_id: 1,
  },
  {
    card_id: 1,
    clipboard_id: 2,
  },
  {
    card_id: 2,
    clipboard_id: 2,
  },
  {
    card_id: 3,
    clipboard_id: 3,
  },
];
const seedCardClipboards = () => CardClipboard.bulkCreate(cardClipboardData);

module.exports = seedCardClipboards;
