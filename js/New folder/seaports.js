function pop_Seaports_14(feature, layer) {
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
                <th scope="row">COMPANY</th>\
                <td>' + (feature.properties['COMPANY'] !== null ? autolinker.link(feature.properties['COMPANY']
        .toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">PROVINCE</th>\
                <td>' + (feature.properties['PROVINCE'] !== null ? autolinker.link(feature.properties[
        'PROVINCE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">REGION</th>\
                <td>' + (feature.properties['REGION'] !== null ? autolinker.link(feature.properties['REGION']
        .toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">PORT NAME</th>\
                <td>' + (feature.properties['PROJECT'] !== null ? autolinker.link(feature.properties['PROJECT']
        .toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {
        maxHeight: 400
    });
}

function style_Seaports_14_0() {
    return {
        pane: 'pane_Seaports_14',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(9,202,220,1.0)',
        interactive: true,
    }
}