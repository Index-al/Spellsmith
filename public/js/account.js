const deleteAccount = async (e) => {
  e.preventDefault();

  const response = await fetch("/api/users/delete", {
    method: "DELETE",
  });
  if (response.ok) {
    alert("account deleted!");
    //todo replace alert
    document.location.replace("/");
  } else {
    alert("failed to delete account");
    //todo replace alert
  }
};

document
  .querySelector("#delete-account")
  .addEventListener("click", deleteAccount);
