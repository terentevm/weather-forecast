import React, {useContext} from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import CurrentWeather from './CurrentWeather/CurrentContainer';
import FavoriteLocations from "./FavoriteLocations";
import LangSelector from './LangSelector';
import Footer from '../Components/Footer/Footer';
import Forecast from '../Components/Forecast/Forecast';
import LoadingAlert from '../Components/Alerts/LoadingAlert';
import { LanguageContext } from '../Providers/LanguageProvider';
import './style/layout-grid.css';
function WeatherLayout() {
  const location  = useSelector((state) => state.weather.location, shallowEqual);

  const { dictionary } = useContext(LanguageContext);

  if (!location) return <LoadingAlert message = {dictionary.search.loadingPlaceholder} />;

  return (
		<div className="grid-container">
			<div className="part-current-weather">
				<CurrentWeather />
			</div>
			<div className="part-favorites">
				<FavoriteLocations/>
			</div>
			<div className="part-forecast">
				<Forecast className="d-block d-sm-none"/>
			</div>
			<div className="part-footer">
				<Footer>
					<LangSelector />
				</Footer>
			</div>
		</div>
	);
}

export default WeatherLayout;
