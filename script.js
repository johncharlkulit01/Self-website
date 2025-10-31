function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const role = document.getElementById("role").value;
  const error = document.getElementById("error-msg");

  // sample accounts
  if ((user === "admin" && pass === "admin123" && role === "admin") ||
      (user === "user" && pass === "user123" && role === "user")) {
    window.location.href = "home.html";
  } else {
    error.style.display = "block";
  }
}

function togglePassword() {
  const passField = document.getElementById("password");
  passField.type = passField.type === "password" ? "text" : "password";
}
