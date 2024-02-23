async function removeFromCollection(e) {
  e.preventDefault();
  const key_id = e.target.getAttribute("card-id");
  // console.log(key_id);
  const response = await fetch("/api/cards/update", {
    method: "DELETE",
    body: JSON.stringify({ key_id }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.reload();
    // alert("Card removed from Collection!");
    //todo: replace alert
  } else {
    // alert("Failed to remove Card from Collection");
    //todo: replace alert
  }
}

const removeButtons = document.querySelectorAll(".remove");

removeButtons.forEach((button) => {
  button.addEventListener("click", removeFromCollection);
});
