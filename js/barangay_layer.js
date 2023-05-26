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
}