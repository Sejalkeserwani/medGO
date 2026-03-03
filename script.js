// =======================
// Live Location Tracking
// =======================
const btn = document.getElementById("getLocationBtn");
const mapDiv = document.getElementById("map");

btn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
});

function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  mapDiv.innerHTML = `<iframe 
    width="100%" 
    height="400" 
    frameborder="0" style="border:0"
    src="https://www.google.com/maps?q=${lat},${lon}&hl=es;z=14&output=embed" allowfullscreen>
  </iframe>`;
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}

// =======================
// Panic SOS Button Placeholder
// =======================
// Later we will add code here to:
// - Auto-book ambulance
// - Share live location with driver & hospital
// Example function:
// function panicSOS() {
//   // code will go here
// }