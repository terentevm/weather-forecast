import React, {useEffect} from 'react';

export default function ({ location }) {

  const options = {
    // Required: API key
    key: 'qcuWBBuhHFjZMHF8OHJA3mgmObMMGuxh', // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    verbose: false,

    // Optional: Initial state of the map
    lat: location.lat,
    lon: location.lon,
    zoom: 5,
    overlay: 'temp',
    lang: 'cs'
  };
  useEffect(() => {


  if (window.W && !window.W.windyBoot) {
    // Initialize Windy API
    window.windyInit(options, windyAPI => {
      // windyAPI is ready, and contain 'map', 'store',
      // 'picker' and other usefull stuff

      const { map, store } = windyAPI;

      store.set('lang', 'cs');
      // .map is instance of Leaflet map
      windyAPI.picker.open({
        lat: location.lat,
        lon: location.lon,
      });


      // window.L.popup()
      //   .setLatLng([location.lat, location.lon])
      //   .setContent('Hello World')
      //   .openOn(map);
    });
  }


  },
  [options]);


  console.dir(options);
  console.dir(window.windyAPI);

  const windyAPI = window.windyAPI;
// Initialize Windy API
  window.windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map, broadcast } = windyAPI;
    // .map is instance of Leaflet map
    windyAPI.picker.open({
      lat: location.lat,
      lon: location.lon,
    });
    broadcast.fire('rqstOpen', 'picker', { lat:location.lat, lon: location.lon })

    // window.L.popup()
    //   .setLatLng([location.lat, location.lon])
    //   .setContent('Hello World')
    //   .openOn(map);
  });

  return (
    <div id="windy">


    </div>
  )
}