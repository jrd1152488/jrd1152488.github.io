map.createPane('pane_GoogleMapsBasic_0');
map.getPane('pane_GoogleMapsBasic_0').style.zIndex = 100;
var layer_GoogleMapsBasic_0 = L.tileLayer('https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
  pane: 'pane_GoogleMapsBasic_0',
  opacity: 0.671,
  minZoom: 1,
  maxZoom: 28,
  minNativeZoom: 0,
  maxNativeZoom: 18
});
layer_GoogleMapsBasic_0;

map.createPane('pane_GoogleMapsSatellite_1');
map.getPane('pane_GoogleMapsSatellite_1').style.zIndex = 100;
var layer_GoogleMapsSatellite_1 = L.tileLayer('http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {
  pane: 'pane_GoogleMapsSatellite_1',
  opacity: 1.0,
  minZoom: 1,
  maxZoom: 28,
  minNativeZoom: 0,
  maxNativeZoom: 25
});
layer_GoogleMapsSatellite_1;
map.addLayer(layer_GoogleMapsSatellite_1);

map.createPane('pane_GoogleSatelliteHybrid_1');
map.getPane('pane_GoogleSatelliteHybrid_1').style.zIndex = 100;
var layer_GoogleSatelliteHybrid_1 = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
  pane: 'pane_GoogleSatelliteHybrid_1',
  opacity: 1.0,
  minZoom: 1,
  maxZoom: 28,
  minNativeZoom: 0,
  maxNativeZoom: 25
});
layer_GoogleSatelliteHybrid_1;