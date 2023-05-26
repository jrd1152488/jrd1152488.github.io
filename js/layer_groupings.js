var overLayers = [{
    group: "Solar Suitability",
    collapsed: true,
    layers: [{
            name: 'GHI x Slope<br /><img src="legend/GHIxSlope.png" />',
            layer: layer_GHISLP
        },
        {
            name: 'Irradiance<br /><img src="legend/Irradiance.png" />',
            layer: layer_IRDGHI
        },
        {
            name: 'Slope Caps - Solar<br /><img src="legend/SlopeCaps-Solar.png" />',
            layer: layer_SLPSLR
        }
    ]
},

{
    group: "Wind Suitability",
    collapsed: true,
    layers: [{
            name: 'Wind Speed x Slope<br /><img src="legend/WSxSlope.png" />',
            layer: layer_WSSLP
        },
        {
            name: 'Wind Speed<br /><img src="legend/WindSpeed.png" />',
            layer: layer_WS,

        },
        {
            name: 'Slope Caps - Wind<br /><img src="legend/SlopeCaps-Wind.png" />',
            layer: layer_SLPWD,

        }
    ]
},

{
    group: "Slope Industry",
    collapsed: true,
    layers: [{
            name: 'Slope<br /><img src="legend/Slope_Industry.png" />',
            layer: layer_SLP
        },
        {
            name: "Open Topo",
            layer: layer_OpenTopo,
            icon: '<i class="fa fa-area-chart" aria-hidden="true"></i>'
        },
        {
            name: "Esri Topo",
            layer: layer_EsriTopo,
            icon: '<i class="fa fa-area-chart" aria-hidden="true"></i>'
        }
    ]
},

{
    group: "Area Restrictions",
    collapsed: true,
    layers: [{
            name: 'Service Contract<br /><table><tr><td style="text-align: center;"><img src="legend/Merged_2_Geothermal0.png" /></td><td>Geothermal</td></tr><tr><td style="text-align: center;"><img src="legend/Merged_2_OffshoreWind1.png" /></td><td>Offshore Wind</td></tr><tr><td style="text-align: center;"><img src="legend/Merged_2_OnshoreWind2.png" /></td><td>Onshore Wind</td></tr><tr><td style="text-align: center;"><img src="legend/Merged_2_Solar3.png" /></td><td>Solar</td></tr></table>',
            layer: layer_ServiceContracts_2,


        },
        {
            name: "Ancestral Domains",
            layer: layer_AncestralDomain_3,
            icon: '<i class="fa fa-universal-access" aria-hidden="true"></i>'
        },
        {
            name: "Protected Areas",
            layer: layer_ProtectedAreas_4,
            icon: '<i class="fa fa-leaf" aria-hidden="true"></i>'
        },
        {
            name: 'Key Biodiversity Areas<br /><img src="legend/KBA.png" />',
            layer: layer_KeyBiodiversityAreas_5,

        }
    ]
},

{
    group: "Hazards",
    collapsed: true,
    layers: [{
            name: "River & Water Bodies",
            layer: layer_RVRWBS,
            icon: '<i class="fa fa-tint" aria-hidden="true"></i>'

        },
        {
            name: 'Flood Hazard<br /><img src="legend/Flood.png" />',
            layer: layer_FloodHazard_25yrs_6

        },
        {
            name: 'Active Faults<br /><img src="legend/Fault.png" />',
            layer: layer_ActiveFault_13,

        },
        {
            name: 'Liquefaction<br /><img src="legend/Liquefaction.png" />',
            layer: layer_LQFCN,

        }

    ]
},

{
    group: "Hazards - Volcano",
    collapsed: true,
    layers: [{
            name: 'Active Volcanoes<br /><img src="legend/Volcanoes.png" />',
            layer: layer_Volcanoes_7
        },
        {
            name: 'Lahar<br /><img src="legend/Lahar.png" />',
            layer: layer_Lahar_6

        },
        {
            name: "Lava",
            layer: layer_Lava_5

        },
        {
            name: "Pyroclastic Flow",
            layer: layer_PyroclasticFlow_4

        },
        {
            name: "Taal Ballistic Projectiles",
            layer: layer_TaalBallisticProjectiles_3

        },
        {
            name: "Taal Fissuring",
            layer: layer_TaalFissuring_2

        },
        {
            name: 'Taal Buffer Rings<br /><img src="legend/Taal_Buffer.png" />',
            layer: layer_TaalBufferRings_1

        }

    ]
},

{
    group: "Added layer",
    collapsed: true,
    layers: [{
            name: "Drawn Layer",
            layer: drawnItems,
            icon: '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>'

        },
        {
            name: "Uploaded Layer",
            layer: fileUploaders,
            icon: '<i class="fa fa-upload" aria-hidden="true"></i>'

        }


    ]
},

{
    group: "Others",
    collapsed: true,
    layers: [{
            name: "Seaports",
            layer: layer_Seaports_14,
            icon: '<img src="legend/Seaports_14.png" />'
        },
        {
            name: "Roads",
            layer: layer_RDS,
            icon: '<img src="legend/Roads.png" />'
        },
        {
            name: "Barangays",
            layer: layer_BarangaysMin_1,
            icon: '<img src="legend/BarangaysMin_1.png" />'
        }


    ]
},

{
    group: "Transmission SS & TL",
    collapsed: true,
    layers: [{
            name: "Existing SS (Above 69kV)",
            layer: layer_500230138115kVExistingSubstations_5,
            icon: '<img src="legend/500230138115kVExistingSubstations_5.png" />'
        },
        {
            name: "TDP SS",
            layer: layer_500230kVTDPSubstations_6,
            icon: '<img src="legend/500230kVTDPSubstations_6.png" />'
        },
        {
            name: "Existing SS (69kV)",
            layer: layer_69kVDULoadendSubtations_4,
            icon: '<img src="legend/69kVDULoadendSubtations_4.png" />'
        },
        {
            name: "Plant-Owned SS",
            layer: layer_PlantCustomerownedSubstations_3,
            icon: '<img src="legend/PlantCustomerownedSubstations_3.png" />'
        },
        {
            name: "Existing TL",
            layer: layer_ExistingTL_1,
            icon: '<img src="legend/ExistingTL_1.png" />'
        },
        {
            name: "TDP TL",
            layer: layer_TDPTL_2,
            icon: '<img src="legend/TDPTL_2.png" />'
        }


    ]
},



{
    group: "Land Use",
    collapsed: true,
    layers: [{
            name: 'Legend<br /><img src="legend/Land_Use.png" />',
            layer: layer_land_cover_map_r1_2020

        },
        {
            name: "LC-R1-Ilocos",
            layer: layer_land_cover_map_r1_2020
        },
        {
            name: "LC-R2-Cagayan",
            layer: layer_land_cover_map_r2_2020_2
        },
        {
            name: "LC-R3-Central Luzon",
            layer: layer_land_cover_map_r3_2020
        },
        {
            name: "LC-CAR-Cordillera",
            layer: layer_land_cover_map_car_2020

        },
        {
            name: "LC-NCR",
            layer: layer_land_cover_map_ncr_2020

        },
        {
            name: "LC-R4A-CALABARZON",
            layer: layer_land_cover_map_r4a_2020

        },
        {
            name: "LC-R4B-MIMAROPA",
            layer: layer_land_cover_map_r4b_2020

        },
        {
            name: "LC-R4B-Palawan",
            layer: layer_land_cover_map_palawan_2020

        },
        {
            name: "LC-R5-Bicol",
            layer: layer_land_cover_map_r5_2020

        },
        {
            name: "LC-R6-Western Vis.",
            layer: layer_land_cover_map_r6_2020_2

        },
        {
            name: "LC-R7-Central Vis.",
            layer: layer_land_cover_map_r7_2020

        },
        {
            name: "LC-R8-Eastern Vis.",
            layer: layer_land_cover_map_r8_2020

        },
        {
            name: "LC-R9-Zamboanga Pen.",
            layer: layer_land_cover_map_r9_2020

        },
        {
            name: "LC-R10-Northern Min.",
            layer: layer_land_cover_map_r10_2020

        },
        {
            name: "LC-R11-Davao",
            layer: layer_land_cover_map_r11_2020

        },
        {
            name: "LC-R12-SOCCSKSARGEN",
            layer: layer_land_cover_map_r12_2020

        },
        {
            name: "LC-R13-Caraga",
            layer: layer_land_cover_map_r13_2020

        },
        {
            name: "LC-BARMM",
            layer: layer_land_cover_map_barmm_2020

        }
    ]
}



];