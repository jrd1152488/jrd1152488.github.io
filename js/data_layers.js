//Active_Fault
function pop_ActiveFault_13(feature, layer) {
    layer.on({
        mouseout: function (e) {
            e.target._eventParents.forEach(function(parent) {
                parent.resetStyle(e.target);
            });
        },
        mouseover: highlightFeature
    });

    var d_fname = feature.properties['d_fname'] || '';
    var d_fccode = feature.properties['d_fccode'] || '';

    var popupContent = '<table>\
        <tr>\
            <th scope="row">Fault Name</th>\
            <td>' + autolinker.link(d_fname) + '</td>\
        </tr>\
        <tr>\
            <th scope="row">Status</th>\
            <td>' + autolinker.link(d_fccode) + '</td>\
        </tr>\
    </table>';

    layer.bindPopup(popupContent, {
        maxHeight: 400
    });
}

function style_ActiveFault_13_0(feature) {
    var color = 'rgba(244,32,32,1.0)';
    if (feature.properties['d_fccode'] === 'Potentially Active Fault') {
        color = 'rgba(244,236,13,1.0)';
    }

    return {
        pane: 'pane_ActiveFault_13',
        opacity: 1,
        color: color,
        dashArray: '',
        lineCap: 'round',
        lineJoin: 'round',
        weight: 3.0,
        fillOpacity: 0,
        interactive: true
    };
}

//function pop_AncestralDomain_3(feature, layer) {
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
      },
      mouseover: highlightFeature,
    });
    var popupContent = `
      <table>
        <tr>
          <th scope="row">REGION</th>
          <td>${feature.properties['REGION'] !== null ? autolinker.link(feature.properties['REGION'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">CADT_NO</th>
          <td>${feature.properties['CADT_NO'] !== null ? autolinker.link(feature.properties['CADT_NO'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">STATUS</th>
          <td>${feature.properties['STATUS'] !== null ? autolinker.link(feature.properties['STATUS'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">ICCs_IPs</th>
          <td>${feature.properties['ICCs_IPs'] !== null ? autolinker.link(feature.properties['ICCs_IPs'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">LOCATION</th>
          <td>${feature.properties['LOCATION'] !== null ? autolinker.link(feature.properties['LOCATION'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">Type</th>
          <td>${feature.properties['ANCESTRAL_'] !== null ? autolinker.link(feature.properties['ANCESTRAL_'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">AREA_HA</th>
          <td>${feature.properties['AREA_HA'] !== null ? autolinker.link(feature.properties['AREA_HA'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">SURVEY_NO</th>
          <td>${feature.properties['SURVEY_NO'] !== null ? autolinker.link(feature.properties['SURVEY_NO'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">DATE_FILED</th>
          <td>${feature.properties['DATE_FILED'] !== null ? autolinker.link(feature.properties['DATE_FILED'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">DATE_APPRO</th>
          <td>${feature.properties['DATE_APPRO'] !== null ? autolinker.link(feature.properties['DATE_APPRO'].toLocaleString()) : ''}</td>
        </tr>
      </table>`;
    layer.bindPopup(popupContent, { maxHeight: 400 });
  }
  
  function style_AncestralDomain_3_0() {
    return {
      pane: 'pane_AncestralDomain_3',
      opacity: 1,
      color: 'rgba(35,35,35,1.0)',
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 1.0,
      fill: true,
      fillOpacity: 0.6,
      fillColor: 'rgba(49,104,243,1.0)',
      interactive: true,
    }
  }
 //Barangay
 function pop_BarangaysMin_1(feature, layer) {
    layer.on({
        mouseout: function (e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
              <tr>\
                  <th scope="row">Barangay</th>\
                  <td>' + (feature.properties['ADM4_EN'] !== null ? autolinker.link(feature.properties['ADM4_EN']
        .toLocaleString()) : '') + '</td>\
              </tr>\
              <tr>\
                  <th scope="row">Mun/City</th>\
                  <td>' + (feature.properties['ADM3_EN'] !== null ? autolinker.link(feature.properties['ADM3_EN']
        .toLocaleString()) : '') + '</td>\
              </tr>\
              <tr>\
                  <th scope="row">Province</th>\
                  <td>' + (feature.properties['ADM2_EN'] !== null ? autolinker.link(feature.properties['ADM2_EN']
        .toLocaleString()) : '') + '</td>\
              </tr>\
              <tr>\
                  <th scope="row">Region</th>\
                  <td>' + (feature.properties['ADM1_EN'] !== null ? autolinker.link(feature.properties['ADM1_EN']
        .toLocaleString()) : '') + '</td>\
              </tr>\
          </table>';
    layer.bindPopup(popupContent, {
        maxHeight: 400
    });
}

function style_BarangaysMin_1_0() {
    return {
        pane: 'pane_BarangaysMin_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: .4,
        fillColor: 'rgba(30,214,234,1.0)',
        interactive: true,
    }
}//Active_Fault
function pop_ActiveFault_13(feature, layer) {
    layer.on({
        mouseout: function (e) {
            e.target._eventParents.forEach(function(parent) {
                parent.resetStyle(e.target);
            });
        },
        mouseover: highlightFeature
    });

    var d_fname = feature.properties['d_fname'] || '';
    var d_fccode = feature.properties['d_fccode'] || '';

    var popupContent = '<table>\
        <tr>\
            <th scope="row">Fault Name</th>\
            <td>' + autolinker.link(d_fname) + '</td>\
        </tr>\
        <tr>\
            <th scope="row">Status</th>\
            <td>' + autolinker.link(d_fccode) + '</td>\
        </tr>\
    </table>';

    layer.bindPopup(popupContent, {
        maxHeight: 400
    });
}

function style_ActiveFault_13_0(feature) {
    var color = 'rgba(244,32,32,1.0)';
    if (feature.properties['d_fccode'] === 'Potentially Active Fault') {
        color = 'rgba(244,236,13,1.0)';
    }

    return {
        pane: 'pane_ActiveFault_13',
        opacity: 1,
        color: color,
        dashArray: '',
        lineCap: 'round',
        lineJoin: 'round',
        weight: 3.0,
        fillOpacity: 0,
        interactive: true
    };
}

//function pop_AncestralDomain_3(feature, layer) {
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
      },
      mouseover: highlightFeature,
    });
    var popupContent = `
      <table>
        <tr>
          <th scope="row">REGION</th>
          <td>${feature.properties['REGION'] !== null ? autolinker.link(feature.properties['REGION'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">CADT_NO</th>
          <td>${feature.properties['CADT_NO'] !== null ? autolinker.link(feature.properties['CADT_NO'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">STATUS</th>
          <td>${feature.properties['STATUS'] !== null ? autolinker.link(feature.properties['STATUS'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">ICCs_IPs</th>
          <td>${feature.properties['ICCs_IPs'] !== null ? autolinker.link(feature.properties['ICCs_IPs'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">LOCATION</th>
          <td>${feature.properties['LOCATION'] !== null ? autolinker.link(feature.properties['LOCATION'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">Type</th>
          <td>${feature.properties['ANCESTRAL_'] !== null ? autolinker.link(feature.properties['ANCESTRAL_'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">AREA_HA</th>
          <td>${feature.properties['AREA_HA'] !== null ? autolinker.link(feature.properties['AREA_HA'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">SURVEY_NO</th>
          <td>${feature.properties['SURVEY_NO'] !== null ? autolinker.link(feature.properties['SURVEY_NO'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">DATE_FILED</th>
          <td>${feature.properties['DATE_FILED'] !== null ? autolinker.link(feature.properties['DATE_FILED'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">DATE_APPRO</th>
          <td>${feature.properties['DATE_APPRO'] !== null ? autolinker.link(feature.properties['DATE_APPRO'].toLocaleString()) : ''}</td>
        </tr>
      </table>`;
    layer.bindPopup(popupContent, { maxHeight: 400 });
  }
  
  function style_AncestralDomain_3_0() {
    return {
      pane: 'pane_AncestralDomain_3',
      opacity: 1,
      color: 'rgba(35,35,35,1.0)',
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 1.0,
      fill: true,
      fillOpacity: 0.6,
      fillColor: 'rgba(49,104,243,1.0)',
      interactive: true,
    }
  }
 //Barangay
 function pop_BarangaysMin_1(feature, layer) {
    layer.on({
        mouseout: function (e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
              <tr>\
                  <th scope="row">Barangay</th>\
                  <td>' + (feature.properties['ADM4_EN'] !== null ? autolinker.link(feature.properties['ADM4_EN']
        .toLocaleString()) : '') + '</td>\
              </tr>\
              <tr>\
                  <th scope="row">Mun/City</th>\
                  <td>' + (feature.properties['ADM3_EN'] !== null ? autolinker.link(feature.properties['ADM3_EN']
        .toLocaleString()) : '') + '</td>\
              </tr>\
              <tr>\
                  <th scope="row">Province</th>\
                  <td>' + (feature.properties['ADM2_EN'] !== null ? autolinker.link(feature.properties['ADM2_EN']
        .toLocaleString()) : '') + '</td>\
              </tr>\
              <tr>\
                  <th scope="row">Region</th>\
                  <td>' + (feature.properties['ADM1_EN'] !== null ? autolinker.link(feature.properties['ADM1_EN']
        .toLocaleString()) : '') + '</td>\
              </tr>\
          </table>';
    layer.bindPopup(popupContent, {
        maxHeight: 400
    });
}

function style_BarangaysMin_1_0() {
    return {
        pane: 'pane_BarangaysMin_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: .4,
        fillColor: 'rgba(30,214,234,1.0)',
        interactive: true,
    }
}//Active_Fault
function pop_ActiveFault_13(feature, layer) {
    layer.on({
        mouseout: function (e) {
            e.target._eventParents.forEach(function(parent) {
                parent.resetStyle(e.target);
            });
        },
function pop_Lahar_6(feature, layer) {
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
      },
      mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                <tr>\
                    <th scope="row">Volcano Name</th>\
                    <td>' + (feature.properties['VOLCANONAM'] !== null ? autolinker.link(feature.properties[
      'VOLCANONAM'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">Lahar Susceptibility</th>\
                    <td>' + (feature.properties['D_LSCODE'] !== null ? autolinker.link(feature.properties[
      'D_LSCODE'].toLocaleString()) : '') + '</td>\
                </tr>\
            </table>';
    layer.bindPopup(popupContent, {
      maxHeight: 400
    });
  }

  function style_Lahar_6_0(feature) {
    const fillColorMap = {
      'High': 'rgba(214,0,0,1.0)',
      'Low': 'rgba(255,131,37,1.0)',
      'Moderate': 'rgba(255,255,0,1.0)',
      'Zone 4': 'rgba(58,234,39,1.0)',
      'Zone 5': 'rgba(37,117,236,1.0)'
    }

    const fillColor = fillColorMap[feature.properties['D_LSCODE']]

    return {
      pane: 'pane_Lahar_6',
      opacity: 1,
      color: 'rgba(35,35,35,1.0)',
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 1.0,
      fill: true,
      fillOpacity: .5,
      fillColor: fillColor,
      interactive: true,
    }
  }function pop_Lava_5(feature, layer) {
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
      },
      mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                <tr>\
                    <th scope="row">Lava Classification</th>\
                    <td>' + (feature.properties['lavaclass'] !== null ? autolinker.link(feature.properties[
      'lavaclass'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">Volcano Name</th>\
                    <td>' + (feature.properties['volcanonam'] !== null ? autolinker.link(feature.properties[
      'volcanonam'].toLocaleString()) : '') + '</td>\
                </tr>\
            </table>';
    layer.bindPopup(popupContent, {
      maxHeight: 400
    });
  }

  function style_Lava_5_0() {
    return {
      pane: 'pane_Lava_5',
      opacity: 1,
      color: 'rgba(35,35,35,1.0)',
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 1.0,
      fill: true,
      fillOpacity: .5,
      fillColor: 'rgba(50,0,0,1.0)',
      interactive: true,
    }
  }function pop_ProtectedAreas_4(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Protected Area Name</th>\
                <td>' + (feature.properties['PANAME'] !== null ? autolinker.link(feature.properties['PANAME'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Region</th>\
                <td>' + (feature.properties['REGION'] !== null ? autolinker.link(feature.properties['REGION'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Ecosystem</th>\
                <td>' + (feature.properties['ECOSYSTEM'] !== null ? autolinker.link(feature.properties['ECOSYSTEM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Geo Zone</th>\
                <td>' + (feature.properties['BioGeoZone'] !== null ? autolinker.link(feature.properties['BioGeoZone'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Legal Basis</th>\
                <td>' + (feature.properties['LEGALBASIS'] !== null ? autolinker.link(feature.properties['LEGALBASIS'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Legal Status</th>\
                <td>' + (feature.properties['LEGALSTATU'] !== null ? autolinker.link(feature.properties['LEGALSTATU'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Category</th>\
                <td>' + (feature.properties['CATEGORY'] !== null ? autolinker.link(feature.properties['CATEGORY'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Validation Status</th>\
                <td>' + (feature.properties['VAL_STATUS'] !== null ? autolinker.link(feature.properties['VAL_STATUS'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Delineation Status</th>\
                <td>' + (feature.properties['DEL_STATUS'] !== null ? autolinker.link(feature.properties['DEL_STATUS'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Remarks</th>\
                <td>' + (feature.properties['REMARKS'] !== null ? autolinker.link(feature.properties['REMARKS'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Area (ha)</th>\
                <td>' + (feature.properties['AREA_Has'] !== null ? autolinker.link(feature.properties['AREA_Has'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_ProtectedAreas_4_0() {
    return {
        pane: 'pane_ProtectedAreas_4',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 0.6,
        fillColor: 'rgba(5,194,87,1.0)',
        interactive: true,
    }
}  //Pyroclastic_Flow
  function pop_PyroclasticFlow_4(feature, layer) {
    layer.on({
        mouseout: function (e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                  <tr>\
                      <th scope="row">Pyroclastic Flow Classification</th>\
                      <td>' + (feature.properties['d_pfclass'] !== null ? autolinker.link(feature.properties[
        'd_pfclass'].toLocaleString()) : '') + '</td>\
                  </tr>\
                  <tr>\
                      <th scope="row">Volcano Name</th>\
                      <td>' + (feature.properties['d_volcanon'] !== null ? autolinker.link(feature.properties[
        'd_volcanon'].toLocaleString()) : '') + '</td>\
                  </tr>\
              </table>';
    layer.bindPopup(popupContent, {
        maxHeight: 400
    });
}
function style_PyroclasticFlow_4_0() {
    return {
        pane: 'pane_PyroclasticFlow_4',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: .5,
        fillColor: 'rgba(189,116,77,1.0)',
        interactive: true,
    }
}function pop_Seaports_14(feature, layer) {
    layer.on({
        mouseout: function (e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <th scope="row">COMPANY</th>\
                <td>' + (feature.properties['COMPANY'] !== null ? autolinker.link(feature.properties['COMPANY']
        .toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">PROVINCE</th>\
                <td>' + (feature.properties['PROVINCE'] !== null ? autolinker.link(feature.properties[
        'PROVINCE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">REGION</th>\
                <td>' + (feature.properties['REGION'] !== null ? autolinker.link(feature.properties['REGION']
        .toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">PORT NAME</th>\
                <td>' + (feature.properties['PROJECT'] !== null ? autolinker.link(feature.properties['PROJECT']
        .toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {
        maxHeight: 400
    });
}

function style_Seaports_14_0() {
    return {
        pane: 'pane_Seaports_14',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(9,202,220,1.0)',
        interactive: true,
    }
}function pop_ServiceContracts_2(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <th scope="row">ID</th>\
                <td>' + (feature.properties['ID'] !== null ? autolinker.link(feature.properties['ID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Project Name</th>\
                <td>' + (feature.properties['SWG_Projec'] !== null ? autolinker.link(feature.properties['SWG_Projec'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">SPV</th>\
                <td>' + (feature.properties['SWG_SPV'] !== null ? autolinker.link(feature.properties['SWG_SPV'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Parent Company</th>\
                <td>' + (feature.properties['SWG_Parent'] !== null ? autolinker.link(feature.properties['SWG_Parent'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Resource</th>\
                <td>' + (feature.properties['SWG_Resour'] !== null ? autolinker.link(feature.properties['SWG_Resour'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Technology Type</th>\
                <td>' + (feature.properties['SWG_Techno'] !== null ? autolinker.link(feature.properties['SWG_Techno'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Capacity (MW)</th>\
                <td>' + (feature.properties['SWG_Capaci'] !== null ? autolinker.link(feature.properties['SWG_Capaci'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">COD</th>\
                <td>' + (feature.properties['SWG_Target'] !== null ? autolinker.link(feature.properties['SWG_Target'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Status</th>\
                <td>' + (feature.properties['SWG_Status'] !== null ? autolinker.link(feature.properties['SWG_Status'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_ServiceContracts_2_0(feature) {
const techno = feature.properties['SWG_Techno'];
const colors = {
'Ground-mounted Solar': 'rgba(252,96,40,1.0)',
'Floating Solar': 'rgba(255,161,47,1.0)',
'Rooftop Solar': 'rgba(219,194,70,1.0)',
'Onshore Wind': 'rgba(73,209,239,1.0)',
'Offshore Wind': 'rgba(23,77,225,1.0)',
'Geothermal': 'rgba(2,190,46,1.0)'
};
const fillColor = colors[techno] || 'rgba(35,35,35,1.0)';

const defaultStyle = {
pane: 'pane_ServiceContracts_2',
opacity: 1,
color: 'rgba(35,35,35,1.0)',
dashArray: '',
lineCap: 'butt',
lineJoin: 'miter',
weight: 1.0, 
fill: true,
fillOpacity: 0.6,
fillColor,
interactive: true
};

return defaultStyle;
}function style_TaalBufferRings_1_0(feature) {
    const bufferStyle = {
        pane: 'pane_TaalBufferRings_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        interactive: true
    };

    switch (String(feature.properties['Buffer'])) {
        case '14km':
            bufferStyle.fillOpacity = 0.5;
            bufferStyle.fillColor = 'rgba(254,208,42,1.0)';
            break;
        case '17km':
            bufferStyle.fillOpacity = 0.4;
            bufferStyle.fillColor = 'rgba(255,230,141,1.0)';
            break;
        case '20km':
            bufferStyle.fillOpacity = 0.3;
            bufferStyle.fillColor = 'rgba(255,246,215,1.0)';
            break;
    }

    return bufferStyle;
}

//Buffer_Rings
function pop_TaalBufferRings_1(feature, layer) {
    layer.on({
        mouseout: function (e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Distance</th>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Buffer'] !== null ? autolinker.link(feature
        .properties['Buffer'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {
        maxHeight: 400
    });
}
//Fissuring
function pop_TaalFissuring_2(feature, layer) {
    layer.on({
        mouseout: function (e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Name</th>\
                <td>' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name']
        .toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {
        maxHeight: 400
    });
}

function style_TaalFissuring_2_0() {
    return {
        pane: 'pane_TaalFissuring_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: .5,
        fillColor: 'rgba(255,131,37,1.0)',
        interactive: true,
    }
}
//Ballistic_Projectiles
function pop_TaalBallisticProjectiles_3(feature, layer) {
    layer.on({
        mouseout: function (e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Name</th>\
                <td>' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name']
        .toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {
        maxHeight: 400
    });
}

function style_TaalBallisticProjectiles_3_0() {
    return {
        pane: 'pane_TaalBallisticProjectiles_3',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: .5,
        fillColor: 'rgba(172,0,0,1.0)',
        interactive: true,
    }
}function pop_Volcanoes_7(feature, layer) {
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
      },
      mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                <tr>\
                    <th scope="row">Volcano Name</th>\
                    <td>' + (feature.properties['d_volcno'] !== null ? autolinker.link(feature.properties[
      'd_volcno'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">Status</th>\
                    <td>' + (feature.properties['d_vtcode'] !== null ? autolinker.link(feature.properties[
      'd_vtcode'].toLocaleString()) : '') + '</td>\
                </tr>\
            </table>';
    layer.bindPopup(popupContent, {
      maxHeight: 400
    });
  }

  function style_Volcanoes_7_0(feature) {
    const colorMap = {
      '01': {
        fillColor: 'rgba(235,8,8,1.0)',
        color: 'rgba(239,11,11,1.0)'
      },
      '02': {
        fillColor: 'rgba(248,229,24,1.0)',
        color: 'rgba(253,229,13,1.0)'
      }
    };

    const properties = feature.properties;
    const code = String(properties['q2wHide_vtcode']);
    const {
      fillColor,
      color
    } = colorMap[code];

    return {
      pane: 'pane_Volcanoes_7',
      shape: 'triangle',
      radius: 5.6,
      opacity: 1,
      color,
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 2.0,
      fill: true,
      fillOpacity: 1,
      fillColor,
      interactive: true,
    }
  }