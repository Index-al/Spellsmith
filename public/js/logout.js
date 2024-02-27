const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/login");
  } else {
    await Toast.fire("Failed to Log Out!");
  }
};

document.querySelector("#logout").addEventListener("click", logout);
