import localeCZ from 'date-fns/locale/cs';

export default {
  coordinates: {
    lat: null,
    lon: null,
  },
  localeOptions: {
    locale: localeCZ,
  },
  processing: false,
  locationList: [],
  location: null,
  info: null,
  fact: {
    temp: -0,
    feels_like: -0,
    condition: 'cloudy',
    wind_speed: -1,
    pressure_mm: 0,
    humidity: 0,
    hourly: [],
    day_duration: {
      h: 0,
      m: 0
    }
  },
  currentHourly: [],
  current: null,
  forecasts: [],
  fcSelected: null,
};
