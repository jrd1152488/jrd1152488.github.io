  //Pyroclastic_Flow
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
}