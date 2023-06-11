function pop_MunicipalitiesMin_0(feature, layer) {
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
                <th scope="row">Municipality</th>\
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

function style_MunicipalitiesMin_0_0() {
    return {
        pane: 'pane_MunicipalitiesMin_0',
        opacity: 1,
        color: 'rgba(4, 196, 46,1.0)',
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