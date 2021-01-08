import React, {useContext} from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { LanguageContext } from '../Providers/LanguageProvider';
import FavoritesList from '../Components/Favorites/FavoritesList';

import { setCurrentLocation, setForecasts }  from '../Actions/LocationAction';

export default function () {
  const { favorites } = useSelector(state => ({favorites: state.favorites.all}), shallowEqual);

  const { dictionary, language } = useContext(LanguageContext);

  const dispatch = useDispatch();

  const locationOnSelect = (location) => {
    dispatch(setCurrentLocation(location));
    dispatch(setForecasts(location));
  }

  return (
    <FavoritesList
      dic={ dictionary }
      favorites={favorites}
      onSelectHandler={locationOnSelect}
    />
  )
}
