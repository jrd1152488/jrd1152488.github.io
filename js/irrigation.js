
function pop_NationalIrrigationSystem_0(feature, layer) {
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
                <th scope="row">Region</th>\
                <td>' + (feature.properties['Reg_Name'] !== null ? autolinker.link(feature.properties[
        'Reg_Name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Province</th>\
                <td>' + (feature.properties['Pro_Name'] !== null ? autolinker.link(feature.properties[
        'Pro_Name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Municipality</th>\
                <td>' + (feature.properties['Mun_Name'] !== null ? autolinker.link(feature.properties[
        'Mun_Name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">NIS Name</th>\
                <td>' + (feature.properties['NIS_name'] !== null ? autolinker.link(feature.properties[
        'NIS_name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Type</th>\
                <td>' + (feature.properties['Type'] !== null ? autolinker.link(feature.properties['Type']
        .toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Agriland</th>\
                <td>' + (feature.properties['Agriland'] !== null ? autolinker.link(feature.properties[
        'Agriland'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {
        maxHeight: 400
    });
}

function style_NationalIrrigationSystem_0_0() {
    return {
        pane: 'pane_NationalIrrigationSystem_0',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 0.6,
        fillColor: 'rgba(190,178,151,1.0)',
        interactive: true,
    }
}