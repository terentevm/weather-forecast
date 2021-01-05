import getConn from '../api';

export const PROCESSING_REQUEST = 'PROCESSING_REQUEST';
export const START_REQUEST_LOCATIONS = 'START_REQUEST_LOCATIONS';
export const REQUEST_LOCATIONS_SUCCESS = 'REQUEST_LOCATIONS_SUCCESS';
export const REQUEST_LOCATIONS_FAILED = 'REQUEST_LOCATIONS_FAILED';
export const SET_COORDINATES = 'SET_COORDINATES';
export const SET_LOCATION = 'SET_LOCATION';
export const SET_FORECAST_INFO = 'SET_FORECAST_INFO';

export const CompleteRequestLocations = (payload) => ({
  type: REQUEST_LOCATIONS_SUCCESS,
  payload,
});

export function cleanLocations() {
  return function (dispatch) {
    dispatch(CompleteRequestLocations([]));
  };
}

export function setCurrentLocationByIP() {
  return function (dispatch) {
    const conn = getConn();
    
    return conn.getCurrentInfo()
      .then((locInfo) => {
        dispatch(setForecasts(locInfo));

        dispatch({
          type: SET_LOCATION,
          payload: locInfo,
        });
      });
  };
}

export function setCurrentLocation(location) {
  return function (dispatch) {
    dispatch({
      type: SET_LOCATION,
      payload: location,
    });
  };
}

export function setForecasts(location) {
  return function (dispatch) {
    const conn = getConn();

    dispatch({ type: PROCESSING_REQUEST });

    return conn.getForecast({
      lat: location.lat,
      lon: location.lon,
      limit: 7,
    }).then((data) => {

      dispatch({
        type: SET_FORECAST_INFO,
        payload: data,
      });
    }).catch((err) => {

    });
  };
}

export function findLocation(search) {
  return function (dispatch) {
    const conn = getConn();

    return conn.findLocation(search)
      .then((data) => {
        console.dir(data);
        dispatch(CompleteRequestLocations(data));
      })
      .catch(() => {
        console.dir('error');
        dispatch({ type: REQUEST_LOCATIONS_FAILED, payload: [] });
      });
  };
}