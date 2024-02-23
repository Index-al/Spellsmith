const deleteAccount = async (e) => {
  e.preventDefault();

  const response = await fetch("/api/users/delete", {
    method: "DELETE",
  });

  if (response.ok) {
    console.log("account deleted!");

    document.location.replace("/");
  } else {
    await Toast.fire("Failed to delete account!");
  }
};

const dialog = document.querySelector("#account-dialog");
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
