const leafletMap = L.map('leaflet-map', {
  minZoom: 2,
  maxBounds: [[-90, -180], [90, 180]],
  maxBoundsViscosity: 1.0
}).setView([38.4, 26.6], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  noWrap: true,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(leafletMap);

const places = [
  { name: 'Çeşme',  coords: [38.323, 26.303] },
  { name: 'Alaçatı', coords: [38.283, 26.373] },
  { name: 'İzmir',   coords: [38.420, 27.140] }
  // kendi noktalarını ekle, en az 8-10 tane
];

// Issue 1: marker'ları bir grupta topla, zoom'a göre göster/gizle
const markerLayer = L.layerGroup();
places.forEach(p => L.marker(p.coords).bindPopup(p.name).addTo(markerLayer));

const ZOOM_THRESHOLD = 8;
function updateMarkers() {
  if (leafletMap.getZoom() >= ZOOM_THRESHOLD) {
    leafletMap.addLayer(markerLayer);
  } else {
    leafletMap.removeLayer(markerLayer);
  }
}
leafletMap.on('zoomend', updateMarkers);
updateMarkers();