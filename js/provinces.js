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
                <th scope="row">Region Code</th>\
                <td>' + (feature.properties['Region Code'] !== null ? autolinker.link(feature.properties['Region Code'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Province</th>\
                <td>' + (feature.properties['Area Name'] !== null ? autolinker.link(feature.properties['Area Name'].toLocaleString()) : '') + '</td>\
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