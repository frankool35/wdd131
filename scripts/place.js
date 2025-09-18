// ==========================
// Footer Year + Last Modified
// ==========================
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ==========================
// Wind Chill Calculation
// ==========================

// Static values (use the same as in your HTML weather section)
const temperature = 45; // °F
const windSpeed = 10;   // mph

function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(1); // round to 1 decimal
}

// Check conditions before calculating
let windChillText = "N/A";
if (temperature <= 50 && windSpeed > 3) {
  windChillText = calculateWindChill(temperature, windSpeed) + " °F";
}

// Display wind chill in the page
document.getElementById("windchill").textContent = windChillText;
