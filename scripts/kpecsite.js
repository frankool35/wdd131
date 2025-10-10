// ===== Toggle Mobile Navigation =====
// Hamburger menu 
const menuButton = document.getElementById("menu-toggle");
const navigation = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navlink.classList.toggle("show");
  menuToggle.textContent = navlink.classList.contain("show") ? "☰" : "✖";
});

function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}



// ===== Real-Time Clock =====
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// ===== Footer Info =====
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

// ===== Smooth Floating Image Animation =====
const img = document.getElementById('floating');
let posX = 50, posY = 50;
let velX = 2, velY = 1.5;

function animateImage() {
  const width = window.innerWidth - img.width;
  const height = window.innerHeight - img.height;

  posX += velX;
  posY += velY;

  if (posX <= 0 || posX >= width) velX *= -1;
  if (posY <= 0 || posY >= height) velY *= -1;

  img.style.transform = `translate(${posX}px, ${posY}px)`;
  requestAnimationFrame(animateImage);
}

animateImage();
