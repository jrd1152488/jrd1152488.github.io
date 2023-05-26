//Active_Fault
function pop_ActiveFault_13(feature, layer) {
    layer.on({
        mouseout: function (e) {
            e.target._eventParents.forEach(function(parent) {
                parent.resetStyle(e.target);
            });
        },
        mouseover: highlightFeature
    });

    var d_fname = feature.properties['d_fname'] || '';
    var d_fccode = feature.properties['d_fccode'] || '';

    var popupContent = '<table>\
        <tr>\
            <th scope="row">Fault Name</th>\
            <td>' + autolinker.link(d_fname) + '</td>\
        </tr>\
        <tr>\
            <th scope="row">Status</th>\
            <td>' + autolinker.link(d_fccode) + '</td>\
        </tr>\
    </table>';

    layer.bindPopup(popupContent, {
        maxHeight: 400
    });
}

function style_ActiveFault_13_0(feature) {
    var color = 'rgba(244,32,32,1.0)';
    if (feature.properties['d_fccode'] === 'Potentially Active Fault') {
        color = 'rgba(244,236,13,1.0)';
    }

    return {
        pane: 'pane_ActiveFault_13',
        opacity: 1,
        color: color,
        dashArray: '',
        lineCap: 'round',
        lineJoin: 'round',
        weight: 3.0,
        fillOpacity: 0,
        interactive: true
    };
}

//