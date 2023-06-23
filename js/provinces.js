function pop_Provinces_0(feature, layer) {

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
                <th scope="row">Province</th>\
                <td>' + (feature.properties['NAME'] !== null ? autolinker.link(feature.properties['NAME'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Provinces_0_0() {
    return {
        pane: 'pane_Regions_0',
        opacity: 1,
        color: 'rgba(250, 119, 5,1.0)',
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