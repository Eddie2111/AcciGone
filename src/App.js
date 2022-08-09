import React, { useState } from 'react';
import "./App.css";
import axios from "axios";
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, {Source, Layer} from 'react-map-gl';
// tokens should be remoed and put into environment
// const secretToken = "sk.eyJ1Ijoic3R1ZGVudDIwMTAxMDczIiwiYSI6ImNsNmF3aGZpaDAxdXUza21tbGloZWNiNHgifQ.WntfC_IoCzqTUJ2t0HCWEw";
const publicToken = "pk.eyJ1Ijoic3R1ZGVudDIwMTAxMDczIiwiYSI6ImNrdndjZG1paDQ1MHMybnRrbzIxN2NpajAifQ.KuopN6eJSnMav-bJZQMZmw";
const layerStyle = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 8,
    'circle-color': '#007cbf'
  }
};

const App = ()=>{
    const [data, setData] = useState({});
    setTimeout(() => {
      axios.get("http://localhost:3001/test").then(res=>{
      console.log(res.data);
      setData(res.data);
    }
    ).catch(err=>{
      console.log(err);
    }
    )}, 4000);
    const geojson = {
      type: 'FeatureCollection',
      features: [
        {type: 'Feature', geometry: {type: 'Point', coordinates: [data.y, data.x]}}
      ]
    };
    // data call from db


return (
  <div className='App-header'>
   <Map
    initialViewState={{
      longitude: 90,
      latitude: 23.8,
      zoom: 7
    }}
    style={{width: '60vw', height: '80vh'}}
    mapStyle="mapbox://styles/mapbox/streets-v11"
    mapboxAccessToken={publicToken}
  >
    <Source id="my-data" type="geojson" data={geojson}>
    <Layer {...layerStyle} />
    </Source>
    </Map>
    </div>
);

}
export default App;

/*

<div className="sidebar">
Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
</div>

  return(
    <div className="App-header">
      <p>{data.x},{data.y},{data.carNumber}</p>
    </div>

  )
  */

  /*
      setTimeout(() => {
    axios.get("http://localhost:3001/test").then(res=>{
    console.log(res.data);
    setData(res.data);
  }
  ).catch(err=>{
    console.log(err);
  }
  )}, 100000);
  */
