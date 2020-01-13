import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import localeCZ from 'date-fns/locale/cs';
import MapConditions from '../../Containers/CurrentWeather/MapConditionsToIcons';
import WindIcon from '../Icons/WindIcon';
import HumidityIcon from '../Icons/HumidityIcon';
import PressureIcon from '../Icons/PressureIcon';
import humidityIcon from '../../assets/svg/humidity.svg';
import pressureIcon from '../../assets/svg/pressure_light.svg';
import './forecast.css';

function PartOfDayForecast(props) {
  const { weather } = props;
  const { title, data } = weather;
  const cond = MapConditions.get(data.condition);

  return (
    <div className="row mx-0">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2">
        <span className="fc_day_part__title">{title}</span>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10">
        <div className="row mx-0 d-flex flex-row justify-content-start">
        <div className="fc_day_part__weather">
          <img src={cond.icon} width="24" height="24" alt="cond icon" />
          <span className="ml-2">
          { data.temp_avg } &#176;
        </span>
        </div>
        <div className="fc_day_part__wind">
          <WindIcon fill="#939cb0" width="24" height="24" />
          <span className="ml-2">
          { data.wind_speed }
        </span>
        </div>
        <div className="fc_day_part__wind">
          <HumidityIcon fill="#939cb0" width="24" height="24" />
          <span className="ml-2">
          { data.humidity }
        </span>
        </div>
        <div className="fc_day_part__wind">
          <PressureIcon fill="#939cb0" width="24" height="24" />
          <span className="ml-2">
          { data.pressure_mm }
        </span>
        </div>
        </div>
      </div>


    </div>
  );
}

function ForecastDay(props) {
  const { forecast, nextDay } = props;

  const options = {
    locale: localeCZ,
  };

  const weatherParts = {
    morning: { title: 'Ráno', data: forecast.parts.morning },
    day: { title: 'Den', data: forecast.parts.day },
    evening: { title: 'Večer', data: forecast.parts.evening },
  };

  if (nextDay) {
    weatherParts.night = { title: 'Noc', data: nextDay.parts.night };
  }

  const fcDate = parse(forecast.date, 'yyyy-MM-dd', new Date());

  let dayOfWeek = format(fcDate, 'EEEE', options);
  dayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);

  const dayFormated = format(fcDate, 'dd-MM-yyyy', options);

  const parts = [];

  Object.keys(weatherParts).forEach((key) => {
    parts.push(<PartOfDayForecast key={key} weather={weatherParts[key]} />);
  });

  return (
    <div
      className="forecast_day_wrapper"
    >
      <div className="mb-2">
        <span className="fc_day__title">{`${dayOfWeek}, ${dayFormated}`}</span>
      </div>
      { parts }
    </div>
  );
}

export default ForecastDay;
