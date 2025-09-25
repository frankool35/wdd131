// Footer year + last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger menu (fixed to match your HTML)
const menuButton = document.querySelector("#menu-toggle");
const navigation = document.querySelector("#nav-links");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("active");
  menuButton.textContent = menuButton.textContent === "✖" ? "☰" : "✖";
});

function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggleButton && navLinks) {
    toggleButton.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      navLinks.classList.toggle("show");
    });
  }
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6-24",
    area: 382207,
      imageUrl: 
        "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
  {
   templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017,May, 21",
      area: 44175, 
      imageUrl:
       "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"    
    },
  {
   templeName: "London England",
    location: "Newchapel Surrey, England  RH7 6HW ,United Kingdom",
    dedicated: "1992,October, 18-20",
      area: 42652, 
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-56886-main.jpg"
    },
    {
     templeName: "Nauvoo Illinois",
    location: "Nauvoo Illinois, United States",
    dedicated: "2002,June, 27-30",
      area: 42652, 
        imageUrl: 
      "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-50576-main.jpg"
  },
  
];

// Function to render temples
function renderTemples(filteredTemples) {
  const container = document.getElementById("temple-cards");
  container.innerHTML = ""; // Clear before adding new

  filteredTemples.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;
    container.appendChild(card);
  });
}

// Initial render
renderTemples(temples);

// Filtering logic
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const filter = e.target.textContent.trim();

    if (filter === "Home") {
      renderTemples(temples);
    } else if (filter === "Old") {
      renderTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900));
    } else if (filter === "New") {
      renderTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000));
    } else if (filter === "Large") {
      renderTemples(temples.filter(t => t.area > 90000));
    } else if (filter === "Small") {
      renderTemples(temples.filter(t => t.area < 10000));
    }
  });
});

