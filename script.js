// création et initialisation d'une carte avec coordonnéees géographiques et un niveau de zoom
var map = L.map("map").setView([45.777222, 3.087025], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Ajout d'un marqueur sur la carte
var marker = L.marker([45.777222, 3.087025]).addTo(map);
// Ajout d'une popup à mon marqueur
marker.bindPopup("<b>Bienvenue à Clermont-Ferrand !</b>").openPopup();
