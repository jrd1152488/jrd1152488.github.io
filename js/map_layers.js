var map = L.map('map', {
  zoomControl: false,
  maxZoom: 28,
  minZoom: 1
});

var philippines = L.latLng(12.8797, 121.7740);
map.setView(philippines, 6);

//OpenTopo
map.createPane('pane_OpenTopo');
map.getPane('pane_OpenTopo').style.zIndex = 104;
var layer_OpenTopo = L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png', {
  pane: 'pane_OpenTopo',
  opacity: 1,
  attribution: '',
  minZoom: 1,
  maxZoom: 28,
  minNativeZoom: 0,
  maxNativeZoom: 25
});
layer_OpenTopo;

//EsriTopo
map.createPane('pane_EsriTopo');
map.getPane('pane_EsriTopo').style.zIndex = 103;
var layer_EsriTopo = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    pane: 'pane_EsriTopo',
    opacity: 1,
    attribution: '',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 18
  });
layer_EsriTopo;


map.createPane('pane_ServiceContractMap_1');
map.getPane('pane_ServiceContractMap_1').style.zIndex = 110;
map.getPane('pane_ServiceContractMap_1').style['mix-blend-mode'] = 'normal';
var layer_ServiceContractMap_1 = new L.geoJson(json_ServiceContractMap_1, {
  attribution: '',
  interactive: true,
  dataVar: 'json_ServiceContractMap_1',
  layerName: 'layer_ServiceContractMap_1',
  pane: 'pane_ServiceContractMap_1',
  onEachFeature: pop_ServiceContractMap_1,
  style: style_ServiceContractMap_1_0,
});
bounds_group.addLayer(layer_ServiceContractMap_1);
map.addLayer(layer_ServiceContractMap_1);


//Ancestral_Domains
map.createPane('pane_AncestralDomain_3');
map.getPane('pane_AncestralDomain_3').style.zIndex = 109;
map.getPane('pane_AncestralDomain_3').style['mix-blend-mode'] = 'normal';
var layer_AncestralDomain_3 = new L.geoJson(json_AncestralDomain_3, {
  attribution: '',
  interactive: true,
  dataVar: 'json_AncestralDomain_3',
  layerName: 'layer_AncestralDomain_3',
  pane: 'pane_AncestralDomain_3',
  onEachFeature: pop_AncestralDomain_3,
  style: style_AncestralDomain_3_0,
});
bounds_group.addLayer(layer_AncestralDomain_3);

//Protected_Areas
map.createPane('pane_ProtectedAreas_4');
map.getPane('pane_ProtectedAreas_4').style.zIndex = 108;
map.getPane('pane_ProtectedAreas_4').style['mix-blend-mode'] = 'normal';
var layer_ProtectedAreas_4 = new L.geoJson(json_ProtectedAreas_4, {
  attribution: '',
  interactive: true,
  dataVar: 'json_ProtectedAreas_4',
  layerName: 'layer_ProtectedAreas_4',
  pane: 'pane_ProtectedAreas_4',
  onEachFeature: pop_ProtectedAreas_4,
  style: style_ProtectedAreas_4_0,
});
bounds_group.addLayer(layer_ProtectedAreas_4);

//Key_Biodiversity
map.createPane('pane_KeyBiodiversityAreas_5');
map.getPane('pane_KeyBiodiversityAreas_5').style.zIndex = 107;
var layer_KeyBiodiversityAreas_5 = L.WMS.layer("https://geoserver.geoportal.gov.ph/geoserver/geoportal/wms",
  "keybiodiversityareas_202005", {
    pane: 'pane_KeyBiodiversityAreas_5',
    format: 'image/png',
    uppercase: true,
    transparent: true,
    continuousWorld: true,
    tiled: true,
    info_format: 'text/html',
    opacity: 0.6,
    identify: true,
    attribution: '',
  });
layer_KeyBiodiversityAreas_5;

//River and Water Bodies
map.createPane('pane_RVRWBS');
map.getPane('pane_RVRWBS').style.zIndex = 111;
var layer_RVRWBS = L.tileLayer('https://github.com/czrxstrd4/RVRWBS/raw/main/RVRWBS/{z}/{x}/{y}.png', {
  pane: 'pane_RVRWBS',
  opacity: 0.6,
  attribution: '',
  minZoom: 1,
  maxZoom: 28,
  minNativeZoom: 4,
  maxNativeZoom: 14
});
layer_RVRWBS;

//Flood_Hazard
map.createPane('pane_FloodHazard_25yrs_6');
map.getPane('pane_FloodHazard_25yrs_6').style.zIndex = 113;
var layer_FloodHazard_25yrs_6 = L.tileLayer(
  'https://github.com/czrxstrd4/FLDHM/raw/main/Tiles/{z}/{x}/{y}.png', {
    pane: 'pane_FloodHazard_25yrs_6',
    opacity: 0.6,
    attribution: '',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 4,
    maxNativeZoom: 14
  });
layer_FloodHazard_25yrs_6;

//Liquefaction
map.createPane('pane_LQFCN');
map.getPane('pane_LQFCN').style.zIndex = 112;
var layer_LQFCN = L.tileLayer('https://github.com/czrxstrd4/LQFCN/raw/main/LQFCN/{z}/{x}/{y}.png', {
  pane: 'pane_LQFCN',
  opacity: 0.6,
  attribution: '',
  minZoom: 1,
  maxZoom: 28,
  minNativeZoom: 4,
  maxNativeZoom: 14
});
layer_LQFCN;
//Active_Fault
map.createPane('pane_ActiveFault_13');
map.getPane('pane_ActiveFault_13').style.zIndex = 121;
map.getPane('pane_ActiveFault_13').style['mix-blend-mode'] = 'normal';
var layer_ActiveFault_13 = new L.geoJson(json_ActiveFault_13, {
  attribution: '',
  interactive: true,
  dataVar: 'json_ActiveFault_13',
  layerName: 'layer_ActiveFault_13',
  pane: 'pane_ActiveFault_13',
  onEachFeature: pop_ActiveFault_13,
  style: style_ActiveFault_13_0,
});
bounds_group.addLayer(layer_ActiveFault_13);



//Active_Volcano
map.createPane('pane_Volcanoes_7');
map.getPane('pane_Volcanoes_7').style.zIndex = 121;
map.getPane('pane_Volcanoes_7').style['mix-blend-mode'] = 'normal';
var layer_Volcanoes_7 = new L.geoJson(json_Volcanoes_7, {
  attribution: '',
  interactive: true,
  dataVar: 'json_Volcanoes_7',
  layerName: 'layer_Volcanoes_7',
  pane: 'pane_Volcanoes_7',
  onEachFeature: pop_Volcanoes_7,
  pointToLayer: function (feature, latlng) {
    var context = {
      feature: feature,
      variables: {}
    };
    return L.shapeMarker(latlng, style_Volcanoes_7_0(feature));
  },
});
bounds_group.addLayer(layer_Volcanoes_7);

//Lahar
map.createPane('pane_Lahar_6');
map.getPane('pane_Lahar_6').style.zIndex = 120;
map.getPane('pane_Lahar_6').style['mix-blend-mode'] = 'normal';
var layer_Lahar_6 = new L.geoJson(json_Lahar_6, {
  attribution: '',
  interactive: true,
  dataVar: 'json_Lahar_6',
  layerName: 'layer_Lahar_6',
  pane: 'pane_Lahar_6',
  onEachFeature: pop_Lahar_6,
  style: style_Lahar_6_0,
});
bounds_group.addLayer(layer_Lahar_6);

//Lava
map.createPane('pane_Lava_5');
map.getPane('pane_Lava_5').style.zIndex = 119;
map.getPane('pane_Lava_5').style['mix-blend-mode'] = 'normal';
var layer_Lava_5 = new L.geoJson(json_Lava_5, {
  attribution: '',
  interactive: true,
  dataVar: 'json_Lava_5',
  layerName: 'layer_Lava_5',
  pane: 'pane_Lava_5',
  onEachFeature: pop_Lava_5,
  style: style_Lava_5_0,
});
bounds_group.addLayer(layer_Lava_5);

//Pyroclastic_Flow
map.createPane('pane_PyroclasticFlow_4');
map.getPane('pane_PyroclasticFlow_4').style.zIndex = 118;
map.getPane('pane_PyroclasticFlow_4').style['mix-blend-mode'] = 'normal';
var layer_PyroclasticFlow_4 = new L.geoJson(json_PyroclasticFlow_4, {
  attribution: '',
  interactive: true,
  dataVar: 'json_PyroclasticFlow_4',
  layerName: 'layer_PyroclasticFlow_4',
  pane: 'pane_PyroclasticFlow_4',
  onEachFeature: pop_PyroclasticFlow_4,
  style: style_PyroclasticFlow_4_0,
});
bounds_group.addLayer(layer_PyroclasticFlow_4);

//Taal_Ballistic
map.createPane('pane_TaalBallisticProjectiles_3');
map.getPane('pane_TaalBallisticProjectiles_3').style.zIndex = 117;
map.getPane('pane_TaalBallisticProjectiles_3').style['mix-blend-mode'] = 'normal';
var layer_TaalBallisticProjectiles_3 = new L.geoJson(json_TaalBallisticProjectiles_3, {
  attribution: '',
  interactive: true,
  dataVar: 'json_TaalBallisticProjectiles_3',
  layerName: 'layer_TaalBallisticProjectiles_3',
  pane: 'pane_TaalBallisticProjectiles_3',
  onEachFeature: pop_TaalBallisticProjectiles_3,
  style: style_TaalBallisticProjectiles_3_0,
});
bounds_group.addLayer(layer_TaalBallisticProjectiles_3);

//Taal_Fissuring
map.createPane('pane_TaalFissuring_2');
map.getPane('pane_TaalFissuring_2').style.zIndex = 116;
map.getPane('pane_TaalFissuring_2').style['mix-blend-mode'] = 'normal';
var layer_TaalFissuring_2 = new L.geoJson(json_TaalFissuring_2, {
  attribution: '',
  interactive: true,
  dataVar: 'json_TaalFissuring_2',
  layerName: 'layer_TaalFissuring_2',
  pane: 'pane_TaalFissuring_2',
  onEachFeature: pop_TaalFissuring_2,
  style: style_TaalFissuring_2_0,
});
bounds_group.addLayer(layer_TaalFissuring_2);

//Taal_Buffer
map.createPane('pane_TaalBufferRings_1');
map.getPane('pane_TaalBufferRings_1').style.zIndex = 115;
map.getPane('pane_TaalBufferRings_1').style['mix-blend-mode'] = 'normal';
var layer_TaalBufferRings_1 = new L.geoJson(json_TaalBufferRings_1, {
  attribution: '',
  interactive: true,
  dataVar: 'json_TaalBufferRings_1',
  layerName: 'layer_TaalBufferRings_1',
  pane: 'pane_TaalBufferRings_1',
  onEachFeature: pop_TaalBufferRings_1,
  style: style_TaalBufferRings_1_0,
});
bounds_group.addLayer(layer_TaalBufferRings_1);

//Seaports
map.createPane('pane_Seaports_14');
map.getPane('pane_Seaports_14').style.zIndex = 122;
map.getPane('pane_Seaports_14').style['mix-blend-mode'] = 'normal';
var layer_Seaports_14 = new L.geoJson(json_Seaports_14, {
  attribution: '',
  interactive: true,
  dataVar: 'json_Seaports_14',
  layerName: 'layer_Seaports_14',
  pane: 'pane_Seaports_14',
  onEachFeature: pop_Seaports_14,
  pointToLayer: function (feature, latlng) {
    var context = {
      feature: feature,
      variables: {}
    };
    return L.circleMarker(latlng, style_Seaports_14_0(feature));
  },
});
bounds_group.addLayer(layer_Seaports_14);

//Roads
map.createPane('pane_RDS');
map.getPane('pane_RDS').style.zIndex = 106;
var layer_RDS = L.tileLayer('https://github.com/czrxstrd4/RDS/raw/main/RDS/{z}/{x}/{y}.png', {
  pane: 'pane_RDS',
  opacity: 1,
  attribution: '',
  minZoom: 1,
  maxZoom: 28,
  minNativeZoom: 4,
  maxNativeZoom: 14
});
layer_RDS;

//Barangay
map.createPane('pane_BarangaysMin_1');
map.getPane('pane_BarangaysMin_1').style.zIndex = 106;
map.getPane('pane_BarangaysMin_1').style['mix-blend-mode'] = 'normal';
var layer_BarangaysMin_1 = new L.geoJson(json_BarangaysMin_1, {
  attribution: '',
  interactive: true,
  dataVar: 'json_BarangaysMin_1',
  layerName: 'layer_BarangaysMin_1',
  pane: 'pane_BarangaysMin_1',
  onEachFeature: pop_BarangaysMin_1,
  style: style_BarangaysMin_1_0,
});
bounds_group.addLayer(layer_BarangaysMin_1);

map.createPane('pane_ExistingTL_1');
map.getPane('pane_ExistingTL_1').style.zIndex = 123;
map.getPane('pane_ExistingTL_1').style['mix-blend-mode'] = 'normal';
var layer_ExistingTL_1 = new L.geoJson(json_ExistingTL_1, {
  attribution: '',
  interactive: true,
  dataVar: 'json_ExistingTL_1',
  layerName: 'layer_ExistingTL_1',
  pane: 'pane_ExistingTL_1',
  onEachFeature: pop_ExistingTL_1,
  style: style_ExistingTL_1_0,
});
layer_ExistingTL_1;

map.createPane('pane_TDPTL_2');
map.getPane('pane_TDPTL_2').style.zIndex = 124;
map.getPane('pane_TDPTL_2').style['mix-blend-mode'] = 'normal';
var layer_TDPTL_2 = new L.geoJson(json_TDPTL_2, {
  attribution: '',
  interactive: true,
  dataVar: 'json_TDPTL_2',
  layerName: 'layer_TDPTL_2',
  pane: 'pane_TDPTL_2',
  onEachFeature: pop_TDPTL_2,
  style: style_TDPTL_2_0,
});
layer_TDPTL_2;

map.createPane('pane_PlantCustomerownedSubstations_3');
map.getPane('pane_PlantCustomerownedSubstations_3').style.zIndex = 125;
map.getPane('pane_PlantCustomerownedSubstations_3').style['mix-blend-mode'] = 'normal';
var layer_PlantCustomerownedSubstations_3 = new L.geoJson(json_PlantCustomerownedSubstations_3, {
  attribution: '',
  interactive: true,
  dataVar: 'json_PlantCustomerownedSubstations_3',
  layerName: 'layer_PlantCustomerownedSubstations_3',
  pane: 'pane_PlantCustomerownedSubstations_3',
  onEachFeature: pop_PlantCustomerownedSubstations_3,
  pointToLayer: function (feature, latlng) {
    var context = {
      feature: feature,
      variables: {}
    };
    return L.circleMarker(latlng, style_PlantCustomerownedSubstations_3_0(feature));
  },
});
layer_PlantCustomerownedSubstations_3;

map.createPane('pane_69kVDULoadendSubstations_4');
map.getPane('pane_69kVDULoadendSubstations_4').style.zIndex = 126;
map.getPane('pane_69kVDULoadendSubstations_4').style['mix-blend-mode'] = 'normal';
var layer_69kVDULoadendSubstations_4 = new L.geoJson(json_69kVDULoadendSubstations_4, {
  attribution: '',
  interactive: true,
  dataVar: 'json_69kVDULoadendSubstations_4',
  layerName: 'layer_69kVDULoadendSubstations_4',
  pane: 'pane_69kVDULoadendSubstations_4',
  onEachFeature: pop_69kVDULoadendSubstations_4,
  pointToLayer: function (feature, latlng) {
    var context = {
      feature: feature,
      variables: {}
    };
    return L.circleMarker(latlng, style_69kVDULoadendSubstations_4_0(feature));
  },
});
layer_69kVDULoadendSubstations_4;

map.createPane('pane_500230138115kVExistingSubstations_5');
map.getPane('pane_500230138115kVExistingSubstations_5').style.zIndex = 127;
map.getPane('pane_500230138115kVExistingSubstations_5').style['mix-blend-mode'] = 'normal';
var layer_500230138115kVExistingSubstations_5 = new L.geoJson(json_500230138115kVExistingSubstations_5, {
  attribution: '',
  interactive: true,
  dataVar: 'json_500230138115kVExistingSubstations_5',
  layerName: 'layer_500230138115kVExistingSubstations_5',
  pane: 'pane_500230138115kVExistingSubstations_5',
  onEachFeature: pop_500230138115kVExistingSubstations_5,
  pointToLayer: function (feature, latlng) {
    var context = {
      feature: feature,
      variables: {}
    };
    return L.circleMarker(latlng, style_500230138115kVExistingSubstations_5_0(feature));
  },
});
layer_500230138115kVExistingSubstations_5;

map.createPane('pane_500230kVTDPSubstations_6');
map.getPane('pane_500230kVTDPSubstations_6').style.zIndex = 128;
map.getPane('pane_500230kVTDPSubstations_6').style['mix-blend-mode'] = 'normal';
var layer_500230kVTDPSubstations_6 = new L.geoJson(json_500230kVTDPSubstations_6, {
  attribution: '',
  interactive: true,
  dataVar: 'json_500230kVTDPSubstations_6',
  layerName: 'layer_500230kVTDPSubstations_6',
  pane: 'pane_500230kVTDPSubstations_6',
  onEachFeature: pop_500230kVTDPSubstations_6,
  pointToLayer: function (feature, latlng) {
    var context = {
      feature: feature,
      variables: {}
    };
    return L.circleMarker(latlng, style_500230kVTDPSubstations_6_0(feature));
  },
});
layer_500230kVTDPSubstations_6;