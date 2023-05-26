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
  }