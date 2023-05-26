function style_TaalBufferRings_1_0(feature) {
    const bufferStyle = {
        pane: 'pane_TaalBufferRings_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        interactive: true
    };

    switch (String(feature.properties['Buffer'])) {
        case '14km':
            bufferStyle.fillOpacity = 0.5;
            bufferStyle.fillColor = 'rgba(254,208,42,1.0)';
            break;
        case '17km':
            bufferStyle.fillOpacity = 0.4;
            bufferStyle.fillColor = 'rgba(255,230,141,1.0)';
            break;
        case '20km':
            bufferStyle.fillOpacity = 0.3;
            bufferStyle.fillColor = 'rgba(255,246,215,1.0)';
            break;
    }

    return bufferStyle;
}

//Buffer_Rings
function pop_TaalBufferRings_1(feature, layer) {
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
                <th scope="row">Distance</th>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Buffer'] !== null ? autolinker.link(feature
        .properties['Buffer'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {
        maxHeight: 400
    });
}
//Fissuring
function pop_TaalFissuring_2(feature, layer) {
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
                <th scope="row">Name</th>\
                <td>' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name']
        .toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {
        maxHeight: 400
    });
}

function style_TaalFissuring_2_0() {
    return {
        pane: 'pane_TaalFissuring_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: .5,
        fillColor: 'rgba(255,131,37,1.0)',
        interactive: true,
    }
}
//Ballistic_Projectiles
function pop_TaalBallisticProjectiles_3(feature, layer) {
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
                <th scope="row">Name</th>\
                <td>' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name']
        .toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {
        maxHeight: 400
    });
}

function style_TaalBallisticProjectiles_3_0() {
    return {
        pane: 'pane_TaalBallisticProjectiles_3',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: .5,
        fillColor: 'rgba(172,0,0,1.0)',
        interactive: true,
    }
}