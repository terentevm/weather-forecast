
export const ADD_LOCATION_TO_FAVORITES = 'ADD_LOCATION_TO_FAVORITES';
export const REMOVE_LOCATION_FROM_FAVORITES = 'REMOVE_LOCATION_FROM_FAVORITES';

export function addLocationToFavorites(location) {
  return function (dispatch) {
    dispatch({
      type: ADD_LOCATION_TO_FAVORITES,
      payload: location,
    });
  };
}

export function removeLocationFromFavorites(location) {

  return function (dispatch) {
    dispatch({
      type: REMOVE_LOCATION_FROM_FAVORITES,
      payload: location,
    });
  };
}
