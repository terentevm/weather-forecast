import React from 'react';
import { connect } from 'react-redux';
import CurrentWeather from '../Components/CurrentWeather/Current.jsx';
import Forecast from '../Components/Forecast/Forecast';

function WeatherLayout(props) {
  const { location } = props;

  if (!location) return null;
  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-xs-12 col-sm-12 col-md-6">
          <CurrentWeather />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 mt-2 mt-md-0">
          <Forecast />
        </div>
      </div>
    </div>

  );
}

const mapStateToProps = (state) => ({
  location: state.weather.location,
});

export default connect(mapStateToProps)(WeatherLayout);
