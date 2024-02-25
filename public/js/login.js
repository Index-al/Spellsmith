const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the homepage
      document.location.replace("/");
    } else {
      await Toast.fire("Failed to login!");
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  // console.log("signupform");
  if (userName && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ userName, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/collection");
    } else {
      await Toast.fire("Failed to Sign up");
    }
  }
};

document
  .querySelector(".login-container")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-container")
  .addEventListener("submit", signupFormHandler);
