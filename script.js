// création et initialisation d'une carte avec coordonnéees géographiques et un niveau de zoom
var map = L.map("map").setView([45.777222, 3.087025], 13);

var Stadia_OSMBright = L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  }
);

Stadia_OSMBright.addTo(map);

// Ajout d'un marqueur sur la carte
var marker = L.marker([45.777222, 3.087025]).addTo(map);
// Ajout d'une popup à mon marqueur
marker.bindPopup("<b>Bienvenue à Clermont-Ferrand !</b>").openPopup();
