import { combineReducers } from 'redux';
import weather from './WeatherReducer';
import favorites from './FavoritesReducer';

const rootReducer = combineReducers({
  weather,
  favorites,
});

export default rootReducer;
