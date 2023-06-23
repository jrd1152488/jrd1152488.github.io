function pop_Regions_0(feature, layer) {
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
                <th scope="row">REGION:</th>\
                <td>' + (feature.properties['REGION'] !== null ? autolinker.link(feature.properties['REGION'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Regions_0_0() {
    return {
        pane: 'pane_Regions_0',
        opacity: 1,
        color: 'rgba(30, 222, 252,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 4.0,
        fill: true,
        fillOpacity: .1,
        fillColor: 'rgba(115,187,207,1.0)',
        interactive: true,
    }
}