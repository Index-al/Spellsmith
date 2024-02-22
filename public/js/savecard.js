async function saveToCollection(e) {
  e.preventDefault();
  const id = e.target.getAttribute("card-id");
  const name = e.target.getAttribute("card-name");
 
  const response = await fetch("/api/cards/", {
    method: "POST",
    body: JSON.stringify({ id, name }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    // alert("Card added to Collection!");
    //todo: replace alert
  } else {
    // alert("Failed to add Card to Collection");
    //todo: replace alert
  }
}

const collectionButtons = document.querySelectorAll(".collection");

collectionButtons.forEach((button) => {
  button.addEventListener("click", saveToCollection);
});
