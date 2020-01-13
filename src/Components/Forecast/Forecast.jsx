import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ForecastDay from './ForecastDay';
import './forecast.css';

function Forecast(props) {
  const { forecasts } = props;
  let ind = 0;
  const forecastList = forecasts.map((item, key, items) => {
    const nextDay = items[key + 1] ? items[key + 1] : null;
    ind += 1;
    return (
      <li key={`fc_day_${ind}`}>
        <ForecastDay forecast={item} nextDay={nextDay} />
      </li>
    );
  });

  return (
    <div
      data-testid="fc_card_wrapper"
      className="card forecast_card mt-sm-2 mt-md-0"
    >
      <div
        className="card-body px-1"
      >
        <h5 className="card-title">Předpověď na 7 dny</h5>
        <div>
          <ul
            data-testid="fc_day_list"
            className="forecast_list"
          >
            { forecastList }
          </ul>
        </div>
      </div>
    </div>
  );
}

Forecast.propTypes = {
  forecasts: PropTypes.array,
};

const mapStateToProps = (state) => ({
  forecasts: state.weather.forecasts,
});
export default connect(mapStateToProps)(Forecast);
