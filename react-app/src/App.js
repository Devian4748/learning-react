import { useLayoutEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import './index.css';

const App = () => {
  const [random, setRandom] = useState(Math.random());

  useLayoutEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiZGV2aWFuNDc0OCIsImEiOiJjbDMxcTJ3b24wYnkxM2tsY3c0MjRyYTJsIn0.TZpiI2Mt6HBFYc49xLmTLg';
    const map = new mapboxgl.Map({
      container: 'map', // matches <div id="map" />
      style: 'mapbox://styles/mapbox/dark-v10', // sets the dark mode
      center: [12.567898, 55.67583], // Sets the center of the map (long, lat)
      zoom: 9,
    });
  }, []);

  return (
    <>
      <button id='re-render' onClick={() => setRandom(Math.random())}>
        Re-render
      </button>
      <div id='map'></div>
    </>
  );
};

export default App;
