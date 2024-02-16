const axios = require('axios');
const express = require('express');
const router = express.Router();

// Route to handle individual card search
router.get("/search/:cardName", async (req, res) => {
	const cardName = req.params.cardName;

	try {
		// Scryfall API endpoint and parameters
		const apiUrl = `https://api.scryfall.com/cards/search?q=${cardName}`;
		const response = await axios.get(apiUrl);
		const cardData = response.data;

		// Check if card data was found
		if (cardData.total_cards > 0) {

            console.log(cardData);
			// Card data found, render card template
			console.log("Card Searched: " + cardData.data[0].name);
			res.render("card", { card: cardData.data[0] });
		} else {
			// No card data found, send 404 error
			res.status(404).send("Card not found");
		}
	} catch (error) {
		console.error(error);
		res.status(500).send("Error retrieving card data");
	}
});

module.exports = router;