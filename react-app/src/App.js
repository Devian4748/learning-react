import { useLayoutEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import './index.css';

const App = () => {
  const [marker, setMarker] = useState();

  const stores = {
    central: [12.567898, 55.67583],
    norrebro: [12.553806, 55.699299],
    airport: [12.650784, 55.618042],
  };

  useLayoutEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiZGV2aWFuNDc0OCIsImEiOiJjbDMxcTJ3b24wYnkxM2tsY3c0MjRyYTJsIn0.TZpiI2Mt6HBFYc49xLmTLg';
    const map = new mapboxgl.Map({
      container: 'map', // matches <div id="map" />
      style: 'mapbox://styles/mapbox/dark-v10', // sets the dark mode
      center: [12.567898, 55.67583], // Sets the center of the map (long, lat)
      zoom: 9,
    });

    const mapMarker = new mapboxgl.Marker()
      .setLngLat(stores['central']) //longitude and latitude
      .addTo(map);
    setMarker(mapMarker);
  }, []);

  const handleStoreChange = event => {
    marker.setLngLat(stores[event.target.value]);
  };

  return (
    <>
      <div className='map-overlay'>
        <h3>Choose store: </h3>
        <select onChange={handleStoreChange}>
          <option value='central'>Central station</option>
          <option value='norrebro'>Norrebro street</option>
          <option value='airport'>CPH Airport</option>
        </select>
      </div>
      <div id='map'></div>
    </>
  );
};

export default App;
