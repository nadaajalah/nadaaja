function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user && pass) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("dashboardPage").style.display = "block";
  } else {
    alert("Username dan password wajib diisi!");
  }
}

function logout() {
  document.getElementById("dashboardPage").style.display = "none";
  document.getElementById("loginPage").style.display = "flex";
}

function klasifikasi() {
  let skor = 0;

  if (document.getElementById("plastik").checked) skor -= 2;
  if (document.getElementById("ramah").checked) skor += 2;
  if (document.getElementById("bekal").checked) skor += 3;
  if (document.getElementById("buang").checked) skor -= 3;

  let kategori = "";
  let hasil = "";

  if (skor >= 3) {
    hasil = "Ramah Lingkungan";
    kategori = "Baik";
  } else if (skor >= 0) {
    hasil = "Cukup Ramah Lingkungan";
    kategori = "Perlu Perbaikan";
  } else {
    hasil = "Tidak Ramah Lingkungan";
    kategori = "Tidak Ramah Lingkungan";
  }

  document.getElementById("skor").innerText = hasil;
  document.getElementById("kategori").innerText = kategori;
  document.getElementById("hasil").style.display = "block";
}
