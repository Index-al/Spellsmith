const router = require("express").Router();
const userRoutes = require("./userRoutes");
const cardRoutes = require("./cardRoutes");
const deckRoutes = require("./deckRoutes");

router.use("/users", userRoutes);
router.use("/cards", cardRoutes);
router.use("/decks", deckRoutes);

module.exports = router;
