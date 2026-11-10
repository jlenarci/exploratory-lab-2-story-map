var config = {
    // The basemap style. OpenFreeMap's styles need no account and no key.
    style: "https://tiles.openfreemap.org/styles/liberty",

    // A marker at the centre of each chapter's view
    showMarkers: true,
    markerColor: "#3FB1CE",

    // A small overview map in one corner
    inset: true,
    insetStyle: "https://tiles.openfreemap.org/styles/positron",
    insetPosition: "bottom-right", // "top-left", "top-right", "bottom-left" or "bottom-right"
    insetZoom: 3,
    insetOptions: {
        markerColor: "orange"
    },

    // The colour of the story panels: "light" or "dark"
    theme: "light",

    // 3D terrain (off here)
    use3dTerrain: false,

    // Move through the chapters by itself (off here)
    auto: false,

    title: "A Century of Change on The UBC Campus",
    subtitle: "How has UBC changed over the past 100 years?",
    byline: "By Jocelyn Lenarcic",
    footer: "Data: <a href='https://github.com/UBCGeodata/ubc-geospatial-opendata' target='_blank'>UBC Geodata</a>. Imagery: EOxCloudless <a href='https://cloudless.eox.at' target='_blank'>https://cloudless.eox.at</a> by EOX IT Services GmbH (Contains modified Copernicus Sentinel data 2024). Elevation (chapter four): Terrain Tiles, accessed on 29 October 2026 from <a href='https://registry.opendata.aws/terrain-tiles' target='_blank'>https://registry.opendata.aws/terrain-tiles</a>. Videos: Musqueam Indian Band (chapter five) and Metro Vancouver (chapter six), on Vimeo. Basemap: <a href='https://openfreemap.org/' target='_blank'>OpenFreeMap</a>, <a href='https://openmaptiles.org/' target='_blank'>OpenMapTiles</a>, © <a href='https://www.openstreetmap.org/copyright' target='_blank'>OpenStreetMap contributors</a>. Created using the <a href='https://github.com/opengeos/maplibre-gl-storymaps' target='_blank'>MapLibre Storytelling</a> template, inspired by <a href='https://github.com/mapbox/storytelling' target='_blank'>Mapbox Storytelling</a>.",

    // The layers your story can show. Each layer starts invisible.
    // A chapter shows a layer when the layer's id is in the chapter's show list.
    layers: [
        {
            id: "landuse",
            type: "fill",
            data: "https://raw.githubusercontent.com/UBCGeodata/ubc-geospatial-opendata/master/ubcv/planning/geojson/ubcv_landuse.geojson",
            paint: {
                // A colour for each planning status in the data's OTHER field
                "fill-color": ["match", ["get", "OTHER"],
                    "Existing", "#1b9e77",
                    "Expansion", "#d95f02",
                    "2050", "#7570b3",
                    "Future 2050+", "#e7298a",
                    "#999999"]
            },
            // The fields to show in a popup when the mouse is over an area
            popup: ["NAME", "LANDUSE", "OTHER"],
            // A black outline around the area under the mouse
            outline: true
        },
        {
            id: "my_developments",
            type: "circle",
            data: "./campus_developments.json",
            paint: {
                "circle-color": "#e67e22",
                "circle-radius": 10,
                "circle-stroke-color": "#ffffff",
                "circle-stroke-width": 2
        },
        popup: ["name", "change"]
            },
    ],

    // The chapters, in the order a reader scrolls through them
    chapters: [
        {
            alignment: "full",
            title: "UBC through time 1920-2018",
            description: [
                "<table style='width:100%; table-layout:fixed; border-spacing:12px;'>",
                "<tr>",

                "<td style='width:33%; vertical-align:top;'>",
                "<h3>1920 — Before the Campus Opened</h3>",
                "<img src='./1920_aerial.png' style='width:100%; height:220px; object-fit:contain;'>",
                "<p>Before UBC's Point Grey campus opened in 1925, the landscape looked significantly different from today.</p>",
                "</td>",

                "<td style='width:33%; vertical-align:top;'>",
                "<h3>1970 — Campus Expansion</h3>",
                "<img src='./1970_aerial.png' style='width:100%; height:220px; object-fit:contain;'>",
                "<p>By 1970, UBC had developed into a larger campus with more academic, residential and recreational buildings.</p>",
                "</td>",

                "<td style='width:33%; vertical-align:top;'>",
                "<h3>2018 — The Modern Campus</h3>",
                "<img src='./2018_aerial.png' style='width:100%; height:220px; object-fit:contain;'>",
                "<p>By 2018, extensive development had occurred throughout the campus.</p>",
                "</td>",

                "</tr>",
                "</table>",

    "<p style='text-align:center; font-size:12px;'>Source: UBC Campus & Community Planning.</p>"
].join(""),
            
          location: { center: [-123.245, 49.26], zoom: 13, pitch: 0, bearing: 0},
exploreAllowed: true
},
{
    
    alignment: "left",
    title: "Major Campus Developments",
            description: "Throughout the past century, UBC has experienced many changes to its built environment. Explore three areas of the campus- Main Mall, Wesbrook Village and University Boulevard- that have undergone sgnificant change.",
            location: { center: [-123.245, 49.26], zoom: 13.5, pitch: 0, bearing: 0 },
            // This chapter's own style, in place of the style at the top
        show: ["my_developments"],
          exploreAllowed: true,
          showMarker: false
        },
                       
        {
            alignment: "left",
            title: "The Musqueam Declaration",
            description: "Chapter five. In 1976, Musqueam Elders and leaders signed the Musqueam Declaration. In it, the Musqueam people declare that they “hold aboriginal title to our land”. On 10 June 2026, Musqueam marked the Declaration's 50th anniversary. The map's view includes the lands and waters that the Declaration describes, from Howe Sound to the south bank of the Fraser River and out to the centre of Georgia Strait.",
            location: { center: [-123.1996, 49.2303], zoom: 9.3, pitch: 0, bearing: 0 },
            style: "./satellite-style.json",
            showMarker: false,
            showInset: false,
            // A video from Vimeo, shown in the panel
            embed: "https://player.vimeo.com/video/1200153323?dnt=1",
            embedHeight: 215,
            descriptionAfter: "Video: Musqueam Indian Band, <i>Celebrating The 50th Anniversary Of The Musqueam Declaration</i> (2026). Read more on Musqueam's page about <a href='https://www.musqueam.bc.ca/celebrating-the-50th-anniversary-of-the-musqueam-declaration/' target='_blank'>the 50th anniversary</a>, or read <a href='https://www.musqueam.bc.ca/wp-content/uploads/2018/06/musqueam_declaration.pdf' target='_blank'>the Declaration</a> (PDF)."
        },
        {
            alignment: "right",
            title: "Pacific Spirit Regional Park",
            description: "Chapter six. Pacific Spirit Regional Park lies between the campus and the City of Vancouver. Its forests, bog, creeks and beaches are habitat for many plants and animals.",
            location: { center: [-123.2295, 49.2575], zoom: 12.6, pitch: 0, bearing: 0 },
            style: "./satellite-style.json",
            showMarker: false,
            embed: "https://player.vimeo.com/video/490043811?h=45151a6105",
            embedHeight: 215,
            descriptionAfter: "Video: Metro Vancouver, <i>Pacific Spirit Regional Park Profile</i> (2020)."
        }
    ]
};

// Your own functions go below this line (see "Run your own code at a chapter" in README.md).
