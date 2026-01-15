function register() {
  let username = document.getElementById("regUsername").value;
  let password = document.getElementById("regPassword").value;

  if (username === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Registration Successful!");
  window.location.href = "index.html";
}

function login() {
  let username = document.getElementById("loginUsername").value;
  let password = document.getElementById("loginPassword").value;

  let storedUsername = localStorage.getItem("username");
  let storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Credentials");
  }
}

function checkAuth() {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn !== "true") {
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "index.html";
}
