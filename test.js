const axios = require("axios").default;
async function searchScryfall(searchText) {
  try {
    const response = await axios.get(
      `https://api.scryfall.com/cards/search?q=${searchText}`
    );

    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
}

searchScryfall("fire");
