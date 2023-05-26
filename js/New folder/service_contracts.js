function pop_ServiceContracts_2(feature, layer) {
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
                <th scope="row">ID</th>\
                <td>' + (feature.properties['ID'] !== null ? autolinker.link(feature.properties['ID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Project Name</th>\
                <td>' + (feature.properties['SWG_Projec'] !== null ? autolinker.link(feature.properties['SWG_Projec'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">SPV</th>\
                <td>' + (feature.properties['SWG_SPV'] !== null ? autolinker.link(feature.properties['SWG_SPV'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Parent Company</th>\
                <td>' + (feature.properties['SWG_Parent'] !== null ? autolinker.link(feature.properties['SWG_Parent'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Resource</th>\
                <td>' + (feature.properties['SWG_Resour'] !== null ? autolinker.link(feature.properties['SWG_Resour'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Technology Type</th>\
                <td>' + (feature.properties['SWG_Techno'] !== null ? autolinker.link(feature.properties['SWG_Techno'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Capacity (MW)</th>\
                <td>' + (feature.properties['SWG_Capaci'] !== null ? autolinker.link(feature.properties['SWG_Capaci'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">COD</th>\
                <td>' + (feature.properties['SWG_Target'] !== null ? autolinker.link(feature.properties['SWG_Target'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Status</th>\
                <td>' + (feature.properties['SWG_Status'] !== null ? autolinker.link(feature.properties['SWG_Status'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_ServiceContracts_2_0(feature) {
const techno = feature.properties['SWG_Techno'];
const colors = {
'Ground-mounted Solar': 'rgba(252,96,40,1.0)',
'Floating Solar': 'rgba(255,161,47,1.0)',
'Rooftop Solar': 'rgba(219,194,70,1.0)',
'Onshore Wind': 'rgba(73,209,239,1.0)',
'Offshore Wind': 'rgba(23,77,225,1.0)',
'Geothermal': 'rgba(2,190,46,1.0)'
};
const fillColor = colors[techno] || 'rgba(35,35,35,1.0)';

const defaultStyle = {
pane: 'pane_ServiceContracts_2',
opacity: 1,
color: 'rgba(35,35,35,1.0)',
dashArray: '',
lineCap: 'butt',
lineJoin: 'miter',
weight: 1.0, 
fill: true,
fillOpacity: 0.6,
fillColor,
interactive: true
};

return defaultStyle;
}