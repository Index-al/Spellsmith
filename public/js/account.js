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

const dialog = document.querySelector("dialog");
const openDialogButton = document.querySelector("#open-dialog");
const closeDialogButton = document.querySelector("#cancel-delete");
openDialogButton.addEventListener("click", () => {
  dialog.showModal();
});
closeDialogButton.addEventListener("click", () => {
  dialog.close();
});

document
  .querySelector("#delete-account")
  .addEventListener("click", deleteAccount);
