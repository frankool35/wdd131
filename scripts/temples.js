// Footer year + last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger menu
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.style.display = navigation.style.display === "flex" ? "none" : "flex";
  menuButton.textContent = menuButton.textContent === "✖" ? "☰" : "✖";
});

function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}

