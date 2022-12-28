import Map, { AttributionControl, FullscreenControl, Source, Layer } from "react-map-gl";
import { Key } from "./Key";

const earthquakeLayer = {
  id: "earthquakes-layer",
  type: "circle",
  // source: "earthquakes",
  layout: { visibility: "visible" },
  metadata: {
    name: "Earthquakes",
  },
  paint: {
    "circle-radius": [
      "interpolate",
      ["linear"],
      ["zoom"],
      7,
      ["interpolate", ["linear"], ["get", "ORIG_MAG"], 1, 1, 6, 4],
      16,
      ["interpolate", ["linear"], ["get", "ORIG_MAG"], 1, 5, 6, 50],
    ],
    "circle-stroke-width": 0.5,
    "circle-color": "#F34949",
    "circle-stroke-color": "white",
  },
}

const hurricaneLayer = {
  id: "hurricane-layer",
  type: "line",
  source: "hurricanes",
  layout: { visibility:"visible" },
  metadata: {
    name: "Hurricanes",
  },
  paint: {
    "line-color": "#7b3294",
    "line-width": [
      "interpolate",
      // Set the exponential rate of change to 0.5
      ["exponential", 0.5],
      ["zoom"],
      // When zoom is 8, line-width will be 1.
      8,
      1,
      // When zoom is 18, line-width will be 10.
      18,
      10,
    ],
  },
}
function App() {
  //test add comment to commit
  //test add comment for kamron to commit
  return (
    <div className="App">
      <Map
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={Key}
      >
        {/* Your map content goes here */}
        <AttributionControl customAttribution="Map design by me" />
        <FullscreenControl />
        <Source id="earthquakes" type='geojson' data="https://raw.githubusercontent.com/phillywolf22/ND_files/master/GEO_earthquakes.json">
          <Layer {...earthquakeLayer} />
        </Source>
        <Source id="hurricanes" type='geojson' data="https://raw.githubusercontent.com/phillywolf22/ND_files/master/Atlantic_Hurricanes.json">
        <Layer {...hurricaneLayer} />
        </Source>
      </Map>
    </div>
  );
}

export default App;
