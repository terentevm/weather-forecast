import {
  ADD_LOCATION_TO_FAVORITES,
  REMOVE_LOCATION_FROM_FAVORITES,
} from '../Actions/FaviritesActions';
import { storeToFavorites, getFavoritesFromStore, removeFromFavorites } from '../Reducers/FavoritesStore';

import { favIndex } from '../Helpers/helpers';

//import initialState from './InitialStates/favorites';
const initialState = {
  all: getFavoritesFromStore(),
};
export default function favorites(state = initialState, action) {

  switch (action.type) {
    case ADD_LOCATION_TO_FAVORITES:
      if (favIndex(state.all, action.payload) === -1) {

        storeToFavorites(action.payload);

        return {
          ...state,
          all: [...state.all, action.payload],
        };
      }
      return state;
    case REMOVE_LOCATION_FROM_FAVORITES:
      removeFromFavorites(action.payload);
      const ind = favIndex(state.all, action.payload);
      return ind === -1
        ? this.state
        : { all: [...state.all.slice(0, ind), ...state.all.slice(ind + 1)] };
    default:
      return state;
  }
}
