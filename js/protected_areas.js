function pop_ProtectedAreas_4(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Protected Area Name</th>\
                <td>' + (feature.properties['PANAME'] !== null ? autolinker.link(feature.properties['PANAME'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Region</th>\
                <td>' + (feature.properties['REGION'] !== null ? autolinker.link(feature.properties['REGION'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Ecosystem</th>\
                <td>' + (feature.properties['ECOSYSTEM'] !== null ? autolinker.link(feature.properties['ECOSYSTEM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Geo Zone</th>\
                <td>' + (feature.properties['BioGeoZone'] !== null ? autolinker.link(feature.properties['BioGeoZone'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Legal Basis</th>\
                <td>' + (feature.properties['LEGALBASIS'] !== null ? autolinker.link(feature.properties['LEGALBASIS'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Legal Status</th>\
                <td>' + (feature.properties['LEGALSTATU'] !== null ? autolinker.link(feature.properties['LEGALSTATU'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Category</th>\
                <td>' + (feature.properties['CATEGORY'] !== null ? autolinker.link(feature.properties['CATEGORY'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Validation Status</th>\
                <td>' + (feature.properties['VAL_STATUS'] !== null ? autolinker.link(feature.properties['VAL_STATUS'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Delineation Status</th>\
                <td>' + (feature.properties['DEL_STATUS'] !== null ? autolinker.link(feature.properties['DEL_STATUS'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Remarks</th>\
                <td>' + (feature.properties['REMARKS'] !== null ? autolinker.link(feature.properties['REMARKS'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Area (ha)</th>\
                <td>' + (feature.properties['AREA_Has'] !== null ? autolinker.link(feature.properties['AREA_Has'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_ProtectedAreas_4_0() {
    return {
        pane: 'pane_ProtectedAreas_4',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 0.6,
        fillColor: 'rgba(5,194,87,1.0)',
        interactive: true,
    }
}