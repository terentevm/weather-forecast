import {
  PROCESSING_REQUEST,
  START_REQUEST_LOCATIONS,
  REQUEST_LOCATIONS_SUCCESS,
  REQUEST_LOCATIONS_FAILED,
  SET_COORDINATES,
  SET_LOCATION,
  SET_FORECAST_INFO,
} from '../Actions/LocationAction';

import initialState from './InitialStates/weather';

const weather = (state = initialState, action) => {
  switch (action.type) {
    case PROCESSING_REQUEST:
      return { ...state, processing: true };
    case START_REQUEST_LOCATIONS:
      return state;
    case REQUEST_LOCATIONS_SUCCESS:
      return { ...state, locationList: action.payload };
    case REQUEST_LOCATIONS_FAILED:
      return state;
    case SET_LOCATION:
      return { ...state, location: action.payload };
    case SET_COORDINATES:
      return { ...state, coordinates: action.payload };
    case SET_FORECAST_INFO:
      return {
        ...state,
        processing: false,
        info: action.payload.info,
        fact: action.payload.fact,
        forecasts: [...action.payload.forecasts],
      };
    default:
      return state;
  }
};

export default weather;
