// Toggel class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika menu diklik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar saidbar untuk menghilangkan nav
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Function untuk menangani klik pada ikon log-in
function redirectToLogin() {
  // Gantilah URL berikut dengan URL halaman login Anda
  window.location.href = "js/login.html";
}

// Menambahkan event listener pada ikon log-in
document.getElementById("log-in").addEventListener("click", redirectToLogin);

