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
    alert("Card added to Collection!");
  } else {
    alert("Failed to add Card to Collection");
  }
}

document
  .querySelector(".collection")
  .addEventListener("click", saveToCollection);