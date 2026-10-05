const hacettepe = ol.proj.fromLonLat([32.735, 39.866]);

const olMap = new ol.Map({
  target: 'ol-map',
  layers: [
    new ol.layer.Tile({ source: new ol.source.OSM({ wrapX: false }) })
  ],
  view: new ol.View({
    center: hacettepe,
    zoom: 12,
    minZoom: 2,
    extent: ol.proj.get('EPSG:3857').getExtent()
  })
});

const olMarkerLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    features: [ new ol.Feature(new ol.geom.Point(hacettepe)) ],
    wrapX: false
  }),
  minZoom: 8
});
olMap.addLayer(olMarkerLayer);