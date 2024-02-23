const updatePassword = async (e) => {
  e.preventDefault();

  const password = document.querySelector("#password").value.trim();
  const newPassword = document.querySelector("#new-password").value.trim();
  const newPasswordConfirm = document
    .querySelector("#new-password-confirm")
    .value.trim();

  if (
    password &&
    newPassword &&
    newPasswordConfirm &&
    newPassword === newPasswordConfirm
  ) {
    const response = await fetch("/api/users/update", {
      method: "PUT",
      body: JSON.stringify({ password, newPassword }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      await Toast.fire("Password Updated!");
      document.location.replace("/account");
    } else {
      Toast.fire("Password Failed to Update");
    }
  } else {
    Toast.fire("password was incorrect, or new passwords did not match!");
  }
};

document
  .querySelector(".update-password")
  .addEventListener("submit", updatePassword);
