function pop_Volcanoes_7(feature, layer) {
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