function pop_500230kVTDPSubstations_6(feature, layer) {
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
                    <td colspan="2" style="text-align: center; font-weight: bold;">' + (feature.properties[
        'Title'] !== null ? autolinker.link(feature.properties['Title'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td style=" text-align:center;">' + (feature.properties['Voltage Level'] !== null ? autolinker
        .link(feature.properties['Voltage Level'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td style=" text-align:center;">' + (feature.properties['Owner'] !== null ? autolinker.link(
        feature.properties['Owner'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2" style="text-align:center;"><strong>ETC: </strong>' + (feature.properties[
        'ETC'] !== null ? autolinker.link(feature.properties['ETC'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2" style="text-align: center;"><strong><br>Substation Headroom</strong><br />' + (
        feature.properties['Substation Headroom'] !== null ? autolinker.link(feature.properties[
          'Substation Headroom'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2" style="text-align: center;"><strong><br>Termination Availability: </strong>' +
      (feature.properties['Termination Availability'] !== null ? autolinker.link(feature.properties[
        'Termination Availability'].toLocaleString()) : '') +
      '</td>\
                </tr>\
                <tr>\
                    <td colspan="2" style="text-align: center;"><strong><br>Potential Connecting Plants</strong><br />' +
      (feature.properties[
        'Potential Connecting Plants'] !== null ? autolinker.link(feature.properties[
        'Potential Connecting Plants'].toLocaleString()) : '') +
      '</td>\
                </tr>\
                <tr>\
                    <td colspan="2" style="text-align: center;"><strong><br>Connecting Plants w/o COD yet</strong><br />' +
      (feature.properties['Connecting Plants w/o COD yet'] !==
        null ? autolinker.link(feature.properties['Connecting Plants w/o COD yet'].toLocaleString()) : '') + '</td>\
                </tr>\
            </table>';
    layer.bindPopup(popupContent, {
      maxHeight: 400
    });
  }

  function style_500230kVTDPSubstations_6_0() {
    return {
      pane: 'pane_500230kVTDPSubstations_6',
      radius: 6.0,
      opacity: 0.8,
      color: 'rgba(35,35,35,1.0)',
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 2.0,
      fill: true,
      fillOpacity: 1,
      fillColor: 'rgba(255,34,1,1.0)',
      interactive: true,
    }
  }