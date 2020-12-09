import React, {useContext} from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import CurrentWeather from './CurrentWeather/CurrentContainer';
import LangSelector from './LangSelector';
import Footer from '../Components/Footer/Footer';
import Forecast from '../Components/Forecast/Forecast';
import LoadingAlert from '../Components/Alerts/LoadingAlert';
import { LanguageContext } from '../Providers/LanguageProvider';

function WeatherLayout() {
  const location  = useSelector((state) => state.weather.location, shallowEqual);

  const { dictionary } = useContext(LanguageContext);

  if (!location) return <LoadingAlert message = {dictionary.search.loadingPlaceholder} />;

  return (
		<div className="container">
			<div className="row mt-2">
				<div className="col-xs-12 col-sm-12 col-md-6 px-0">
            <CurrentWeather />
				</div>
				<div className="col-xs-12 col-sm-12 col-md-6 px-0 px-sm-1 mt-2 mt-md-0">
          <Forecast className="d-block d-sm-none"/>
				</div>
			</div>
			<Footer>
				<LangSelector />
			</Footer>
		</div>
	);
}

export default WeatherLayout;
