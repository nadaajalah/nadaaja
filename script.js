function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if(user && pass) {
    localStorage.setItem("login", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Isi username dan password!");
  }
}

function logout() {
  localStorage.removeItem("login");
  window.location.href = "index.html";
}

if (window.location.pathname.includes("dashboard")) {
  if (!localStorage.getItem("login")) {
    window.location.href = "index.html";
  }
}
