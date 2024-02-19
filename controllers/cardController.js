const axios = require("axios");
const express = require("express");
const router = express.Router();

// Route to handle individual card search
router.get("/search/:cardName", async (req, res) => {
  const cardName = req.params.cardName;

  try {
    // Use the 'exact' parameter for an exact name match
    const apiUrl = `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(cardName)}`;
    const response = await axios.get(apiUrl);
    const cardData = response.data;

    // Render card template with the fetched data
    res.render("card", { card: cardData });
  } catch (error) {
    // If the card is not found, Scryfall API will return a 404 status
    if (error.response && error.response.status === 404) {
      res.status(404).send("Card not found");
    } else {
      console.error(error);
      res.status(500).send("Error retrieving card data");
    }
  }
});

module.exports = router;