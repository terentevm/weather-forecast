import getUnixTime from 'date-fns/getUnixTime';
import localeCZ from 'date-fns/locale/cs';
import fakeLocationList from './FakeLocationList';
import fakeCurrentLocation from './fakeCurrentLocation';
import { info, fact, forecasts } from './fakeForecastData';
import fakeFavorites from './fakeFavorites';

const fakeStore = {
  weather: {
    coordinates: {
      lat: null,
      lon: null,
    },
    localeOptions: {
      locale: localeCZ,
    },
    processing: false,
    locationList: fakeLocationList,
    locationTime: getUnixTime(new Date()),
    location: fakeCurrentLocation,
    info: info,
    fact: fact,
    current: fakeCurrentLocation,
    forecasts: forecasts,
  },
  favorites: {
    all: fakeFavorites,
  },
};

export default fakeStore;
