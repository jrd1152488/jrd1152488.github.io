function pop_Lava_5(feature, layer) {
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
  }