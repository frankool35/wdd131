// ===== Toggle Mobile Navigation =====
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

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
