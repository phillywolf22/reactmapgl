import Map, { AttributionControl, FullscreenControl } from "react-map-gl";
import { Key } from "./Key";

function App() {
  //test add comment to commit
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
      </Map>
    </div>
  );
}

export default App;
