// map.js - Handles map and job markers
let map;
let userMarker;
const defaultCoords = [40.7128, -74.0060]; // NYC fallback

function initMap(jobs) {
  map = L.map('map').setView(defaultCoords, 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Try geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const coords = [pos.coords.latitude, pos.coords.longitude];
      map.setView(coords, 14);
      userMarker = L.marker(coords, {icon: L.icon({iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-icon.png', iconSize: [25,41], iconAnchor: [12,41]})}).addTo(map).bindPopup('You are here').openPopup();
    }, () => {
      // fallback to default
    });
  }

  // Add job markers
  jobs.forEach(job => {
    const marker = L.marker([job.lat, job.lng]).addTo(map);
    marker.bindPopup(`<b>${job.title}</b><br>${job.description}<br><b>Pay:</b> $${job.pay}<br><b>Contact:</b> ${job.contact}`);
    marker.on('click', () => {
      // Optionally highlight job in list
    });
  });
}

// Expose initMap for dashboard.js
window.initMap = initMap; 