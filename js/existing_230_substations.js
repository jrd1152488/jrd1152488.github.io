function pop_500230138115kVExistingSubstations_5(feature, layer) {
  layer.on({
    mouseout: function (e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });

  var autolinkedTitle = feature.properties['Title'] !== null ? autolinker.link(feature.properties['Title'].toLocaleString()) : '';
  var autolinkedVoltageLevel = feature.properties['Voltage Level'] !== null ? autolinker.link(feature.properties['Voltage Level'].toLocaleString()) : '';
  var autolinkedOwner = feature.properties['Owner'] !== null ? autolinker.link(feature.properties['Owner'].toLocaleString()) : '';
  var autolinkedETC = feature.properties['ETC'] !== null ? autolinker.link(feature.properties['ETC'].toLocaleString()) : '';
  var autolinkedSubstationHeadroom = feature.properties['Substation Headroom'] !== null ? autolinker.link(feature.properties['Substation Headroom'].toLocaleString()) : '';
  var autolinkedTerminationAvailability = feature.properties['Termination Availability'] !== null ? autolinker.link(feature.properties['Termination Availability'].toLocaleString()) : '';
  var autolinkedPotentialConnectingPlants = feature.properties['Potential Connecting Plants'] !== null ? autolinker.link(feature.properties['Potential Connecting Plants'].toLocaleString()) : '';
  var autolinkedConnectingPlantsWithoutCOD = feature.properties['Connecting Plants w/o COD yet'] !== null ? autolinker.link(feature.properties['Connecting Plants w/o COD yet'].toLocaleString()) : '';

  var popupContent = '<table>\
    <tr>\
        <td colspan="2" style="text-align: center; font-weight: bold;">' + autolinkedTitle + '</td>\
    </tr>\
    <tr>\
        <td style=" text-align:center;">' + autolinkedVoltageLevel + '</td>\
    </tr>\
    <tr>\
        <td style=" text-align:center;">' + autolinkedOwner + '</td>\
    </tr>\
    <tr>\
        <td colspan="2" style="text-align:center;"><strong>ETC: </strong>' + autolinkedETC + '</td>\
    </tr>\
    <tr>\
        <td colspan="2" style="text-align: center;"><strong><br>Transmission/Substation Headroom</strong><br />' + autolinkedSubstationHeadroom + '</td>\
    </tr>\
    <tr>\
        <td colspan="2" style="text-align: center;"><strong><br>Termination Availability: </strong>' + autolinkedTerminationAvailability + '</td>\
    </tr>\
    <tr>\
        <td colspan="2" style="text-align: center;"><strong><br>Potential Connecting Plants</strong><br />' + autolinkedPotentialConnectingPlants + '</td>\
    </tr>\
    <tr>\
        <td colspan="2" style="text-align: center;"><strong><br>Connecting Plants w/o COD yet</strong><br />' + autolinkedConnectingPlantsWithoutCOD + '</td>\
    </tr>\
  </table>';

  layer.bindPopup(popupContent, {
    maxHeight: 400
  });
}

function style_500230138115kVExistingSubstations_5_0() {
  return {
    pane: 'pane_500230138115kVExistingSubstations_5',
    radius: 6.0,
    opacity: 0.8,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 2.0,
    fill: true,
    fillOpacity: 1,
    fillColor: 'rgba(255,217,67,1.0)',
    interactive: true,
  };
}
