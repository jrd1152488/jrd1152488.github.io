function pop_ServiceContractMap_1(feature, layer) {
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
                      <th scope="row">ID</th>\
                      <td>' + (feature.properties['ID'] !== null ? autolinker.link(feature.properties['ID']
      .toLocaleString()) : '') + '</td>\
                  </tr>\
                  <tr>\
                      <th scope="row">Project Name</th>\
                      <td>' + (feature.properties['sc_Project Name'] !== null ? autolinker.link(feature.properties[
      'sc_Project Name'].toLocaleString()) : '') + '</td>\
                  </tr>\
                  <tr>\
                      <th scope="row">SPV</th>\
                      <td>' + (feature.properties['sc_SPV'] !== null ? autolinker.link(feature.properties['sc_SPV']
      .toLocaleString()) : '') + '</td>\
                  </tr>\
                  <tr>\
                      <th scope="row">Parent Company</th>\
                      <td>' + (feature.properties['sc_Parent Company'] !== null ? autolinker.link(feature.properties[
      'sc_Parent Company'].toLocaleString()) : '') + '</td>\
                  </tr>\
                  <tr>\
                      <th scope="row">Resource Type</th>\
                      <td>' + (feature.properties['sc_Resource'] !== null ? autolinker.link(feature.properties[
      'sc_Resource'].toLocaleString()) : '') + '</td>\
                  </tr>\
                  <tr>\
                      <th scope="row">Technology Type</th>\
                      <td>' + (feature.properties['sc_Technology Type'] !== null ? autolinker.link(feature
      .properties['sc_Technology Type'].toLocaleString()) : '') + '</td>\
                  </tr>\
                  <tr>\
                      <th scope="row">Capacity (MW)</th>\
                      <td>' + (feature.properties['sc_Capacity (MW)'] !== null ? autolinker.link(feature.properties[
      'sc_Capacity (MW)'].toLocaleString()) : '') + '</td>\
                  </tr>\
                  <tr>\
                      <th scope="row">COD</th>\
                      <td>' + (feature.properties['sc_COD'] !== null ? autolinker.link(feature.properties['sc_COD']
      .toLocaleString()) : '') + '</td>\
                  </tr>\
                  <tr>\
                      <th scope="row">Status</th>\
                      <td>' + (feature.properties['sc_Status'] !== null ? autolinker.link(feature.properties[
      'sc_Status'].toLocaleString()) : '') + '</td>\
                  </tr>\
                  <tr>\
                      <th scope="row">Resource Value</th>\
                      <td>' + (feature.properties['sc_Resource Value'] !== null ? autolinker.link(feature.properties[
      'sc_Resource Value'].toLocaleString()) : '') + '</td>\
                  </tr>\
                  <tr>\
                      <th scope="row">Terrain Grade</th>\
                      <td>' + (feature.properties['sc_Terrain Grade'] !== null ? autolinker.link(feature.properties[
      'sc_Terrain Grade'].toLocaleString()) : '') + '</td>\
                  </tr>\
                  <tr>\
                      <th scope="row">Nearest Substation</th>\
                      <td>' + (feature.properties['sc_Nearest Substation'] !== null ? autolinker.link(feature
      .properties['sc_Nearest Substation'].toLocaleString()) : '') + '</td>\
                  </tr>\
                  <tr>\
                      <th scope="row">Est. TL Length (km)</th>\
                      <td>' + (feature.properties['sc_Est. TL Length (km)'] !== null ? autolinker.link(feature
      .properties['sc_Est. TL Length (km)'].toLocaleString()) : '') + '</td>\
                  </tr>\
              </table>';
    layer.bindPopup(popupContent, {
      maxHeight: 400
    });
  }


  function style_ServiceContractMap_1_0(feature) {
    switch (String(feature.properties['sc_Technology Type'])) {
      case '-':
        return {
          pane: 'pane_ServiceContractMap_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(0,182,0,0.6)',
            interactive: true,
        }
        break;
      case 'Offshore':
        return {
          pane: 'pane_ServiceContractMap_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(0,0,200,0.6)',
            interactive: true,
        }
        break;
      case 'Onshore':
        return {
          pane: 'pane_ServiceContractMap_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(0,226,233,0.6)',
            interactive: true,
        }
        break;
      case 'Floating':
        return {
          pane: 'pane_ServiceContractMap_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(255,158,1,0.6)',
            interactive: true,
        }
        break;
      case 'Rooftop':
        return {
          pane: 'pane_ServiceContractMap_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(255,238,1,0.6)',
            interactive: true,
        }
        break;
      case 'Ground mounted':
        return {
          pane: 'pane_ServiceContractMap_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(255,94,0,0.6)',
            interactive: true,
        }
        break;
    }
  }