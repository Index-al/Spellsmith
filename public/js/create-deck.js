async function createDeck(e) {
  e.preventDefault();

  const deckName = document.querySelector("#new-deck").value.trim();
  const response = await fetch("/api/decks/", {
    method: "POST",
    body: JSON.stringify({ deckName }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.reload();
    alert("New Deck Created!");
    //todo: replace alert
  } else {
    // alert("Failed to add Card to Collection");
    //todo: replace alert
  }
}

async function removeDeck(e) {
  e.preventDefault();

  const id = e.target.getAttribute("deck_id");
  const response = await fetch("/api/decks/delete", {
    method: "DELETE",
    body: JSON.stringify({ id }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.reload();
    //todo: replace alert
  } else {
    // alert("Failed to add Card to Collection");
    //todo: replace alert
  }
}

document.querySelector(".create-deck").addEventListener("submit", createDeck);
const removeDeckButtons = document.querySelectorAll(".remove-button");

removeDeckButtons.forEach((button) => {
  button.addEventListener("click", removeDeck);
});
