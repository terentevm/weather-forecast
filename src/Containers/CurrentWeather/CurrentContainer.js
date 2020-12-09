import React, {useContext} from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import CurrentCard from '../../Components/CurrentWeather/CurrentCard';
import CurrentLocation from '../../Components/CurrentWeather/CurrentLocation';
import CurrentInfo from '../../Components/CurrentWeather/CurrentInfo';
import CurrentHourly from '../../Components/CurrentWeather/CurrentHourly';
import DayDurationCard from '../../Components/CurrentDayDuration/DayDuration';
import { LanguageContext } from '../../Providers/LanguageProvider';
import MapConditions from './MapConditionsToIcons';
import { addLocationToFavorites } from '../../Actions/FaviritesActions';
import { favIndex } from '../../Helpers/helpers';

function Duration(fact, dic) {
  if ('sunrise_hh_mm' in fact) {
		return <DayDurationCard fact={fact} dic={dic}/>;
	}
  return '';
}

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

  const cond = MapConditions.get(fact.condition);
  const condClassName = cond.getClassName(fact.day_part);

  const addToFavorite = () => dispatch(addLocationToFavorites(location));

  const isFavorite = favIndex(favorites, location) !== -1;

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
            addToFavorite={addToFavorite}
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
        </CurrentCard>
			</div>
			<div className="row mx-0">{Duration(fact, dictionary)}</div>
		</div>
	);
}

export default CurrentContainer
