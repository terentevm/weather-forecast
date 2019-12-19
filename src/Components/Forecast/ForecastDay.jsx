import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import localeCZ from 'date-fns/locale/cs';
import MapConditions from '../../Containers/CurrentWeather/MapConditionsToIcons';
import windIcon from '../../assets/svg/wind.svg';
import humidityIcon from '../../assets/svg/humidity.svg';
import pressureIcon from '../../assets/svg/pressure_light.svg';
import './forecast.css';

function PartOfDayForecast(props) {
  const { weather } = props;
  const { title, data } = weather;
  const cond = MapConditions.get(data.condition);

  return (
    <div className="d-flex flex-row justify-content-start">
      <span className="fc_day_part__title text-white">{title}</span>
      <div className="fc_day_part__weather">
        <img src={cond.icon} width="24" height="24" alt="cond icon" />
        <span className="text-white ml-2">
          { data.temp_avg } &#176;
        </span>
      </div>
      <div className="fc_day_part__wind">
        <img src={windIcon} width="24" height="24" alt="cond icon" />
        <span className="text-white ml-2">
          { data.wind_speed }
        </span>
      </div>
      <div className="fc_day_part__wind">
        <img src={humidityIcon} width="24" height="24" alt="cond icon" />
        <span className="text-white ml-2">
          { data.humidity }
        </span>
      </div>
      <div className="fc_day_part__wind">
        <img src={pressureIcon} width="24" height="24" alt="cond icon" />
        <span className="text-white ml-2">
          { data.pressure_mm }
        </span>
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
