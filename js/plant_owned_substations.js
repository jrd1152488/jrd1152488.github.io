function pop_PlantCustomerownedSubstations_3(feature, layer) {
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
                <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties[
        'Name'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {
        maxHeight: 400
    });
}

function style_PlantCustomerownedSubstations_3_0() {
    return {
        pane: 'pane_PlantCustomerownedSubstations_3',
        radius: 3.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 2.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(145,82,222,1.0)',
        interactive: true,
    }
}
