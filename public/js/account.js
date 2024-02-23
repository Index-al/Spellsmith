const deleteAccount = async (e) => {
  e.preventDefault();
  
  const response = await fetch("/api/users/delete", {
    method: "DELETE",
  });
  if (response.ok) {
    console.log("account deleted!");
    //todo replace alert
    document.location.replace("/");
  } else {
    console.log("failed to delete account");
    //todo replace alert
  }
};

const dialog = document.querySelector("#delete-account");
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
