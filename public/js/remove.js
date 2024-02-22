async function removeFromCollection(e) {
  e.preventDefault();
  const key_id = e.target.getAttribute("card-id");
  console.log(key_id);
  const response = await fetch("/api/cards/update", {
    method: "PUT",
    body: JSON.stringify({ key_id }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.reload();
    alert("Card removed from Collection!");
  } else {
    alert("Failed to remove Card from Collection");
  }
}

const removeButtons = document.querySelectorAll(".remove");

removeButtons.forEach((button) => {
  button.addEventListener("click", removeFromCollection);
});
