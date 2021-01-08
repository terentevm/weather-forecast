import React, {useContext} from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import CurrentCard from '../../Components/CurrentWeather/CurrentCard';
import CurrentLocation from '../../Components/CurrentWeather/CurrentLocation';
import CurrentInfo from '../../Components/CurrentWeather/CurrentInfo';
import CurrentHourly from '../../Components/CurrentWeather/CurrentHourly';
import CurrentDayDuration from '../../Components/CurrentWeather/CurrentDayDuration';
import { LanguageContext } from '../../Providers/LanguageProvider';
import MapConditions from './MapConditionsToIcons';
import { addLocationToFavorites, removeLocationFromFavorites } from '../../Actions/FaviritesActions';
import { favIndex, browser_supports_webp } from '../../Helpers/helpers';

function CurrentContainer() {

  const { dictionary, language } = useContext(LanguageContext);
  const dispatch = useDispatch();

  const { fact, location, currentHourly, favorites,  processing} = useSelector(state => ({
    fact: state.weather.fact,
    currentHourly: state.weather.currentHourly,
    location: state.weather.location,
    favorites: state.favorites.all,
    processing: state.weather.processing
  }), shallowEqual);

  // console.dir(location);
  console.dir(fact);
  const cond = MapConditions.get(fact.condition);
  const condClassName = cond.getClassName(fact.day_part) + (browser_supports_webp() === false ? "_jpeg" : "");

  const isFavorite = favIndex(favorites, location) !== -1;

  const toggleIsFavorite = (() => {

    return isFavorite === false
      ? () => dispatch(addLocationToFavorites(location))
      : () => dispatch(removeLocationFromFavorites(location))
  })();

  return (
		<div>
			<div className="row mx-0">
				<CurrentCard
          condClassName={condClassName}
				>
          <CurrentLocation
            location={location}
            dateinfo={fact.dateinfo}
            processing={processing}
            addToFavorite={toggleIsFavorite}
            isFavorite ={isFavorite}
            dic={dictionary}
          />
          <CurrentInfo
            fact={fact}
            dic={dictionary}
            language={language}
            cond={cond}
          />
          <CurrentHourly
            hourly={currentHourly}
            dic={dictionary}
          />
          <CurrentDayDuration
            fact={fact}
            dic={dictionary}
          />
        </CurrentCard>
			</div>
		</div>
	);
}

export default CurrentContainer
