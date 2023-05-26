function pop_AncestralDomain_3(feature, layer) {
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
      },
      mouseover: highlightFeature,
    });
    var popupContent = `
      <table>
        <tr>
          <th scope="row">REGION</th>
          <td>${feature.properties['REGION'] !== null ? autolinker.link(feature.properties['REGION'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">CADT_NO</th>
          <td>${feature.properties['CADT_NO'] !== null ? autolinker.link(feature.properties['CADT_NO'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">STATUS</th>
          <td>${feature.properties['STATUS'] !== null ? autolinker.link(feature.properties['STATUS'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">ICCs_IPs</th>
          <td>${feature.properties['ICCs_IPs'] !== null ? autolinker.link(feature.properties['ICCs_IPs'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">LOCATION</th>
          <td>${feature.properties['LOCATION'] !== null ? autolinker.link(feature.properties['LOCATION'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">Type</th>
          <td>${feature.properties['ANCESTRAL_'] !== null ? autolinker.link(feature.properties['ANCESTRAL_'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">AREA_HA</th>
          <td>${feature.properties['AREA_HA'] !== null ? autolinker.link(feature.properties['AREA_HA'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">SURVEY_NO</th>
          <td>${feature.properties['SURVEY_NO'] !== null ? autolinker.link(feature.properties['SURVEY_NO'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">DATE_FILED</th>
          <td>${feature.properties['DATE_FILED'] !== null ? autolinker.link(feature.properties['DATE_FILED'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
          <th scope="row">DATE_APPRO</th>
          <td>${feature.properties['DATE_APPRO'] !== null ? autolinker.link(feature.properties['DATE_APPRO'].toLocaleString()) : ''}</td>
        </tr>
      </table>`;
    layer.bindPopup(popupContent, { maxHeight: 400 });
  }
  
  function style_AncestralDomain_3_0() {
    return {
      pane: 'pane_AncestralDomain_3',
      opacity: 1,
      color: 'rgba(35,35,35,1.0)',
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 1.0,
      fill: true,
      fillOpacity: 0.6,
      fillColor: 'rgba(49,104,243,1.0)',
      interactive: true,
    }
  }
