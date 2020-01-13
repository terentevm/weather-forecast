import React from 'react';
import PropTypes from 'prop-types';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import timeStringType from '../../PropTypes/TimeStringType';
import SunIcon from '../../assets/icons/sun.svg';
import MoonIcon from '../../assets/icons/moon.svg';
import './DayDuration.css';

function getIcon(polarNight = false) {
  if (polarNight === false) {
    return (<img src={SunIcon} alt="sun icon" width={68} height={68} />);
  }
  return (<img src={MoonIcon} alt="sun icon" width={68} height={68} />);
}

function cardBody(polarNight = false, durationTemplate, fcSelectedDay) {
  if (polarNight === false) {
    return (
    <div className="d-flex flex-column ml-1">
      <h6 className="card-title">{durationTemplate}</h6>
      <span className="card-text">{`Východ slunce - ${fcSelectedDay.sunrise}`}</span>
      <span className="card-text">{`Západ slunce - ${fcSelectedDay.sunset}`}</span>
    </div>
    );
  }

  return (
    <div className="d-flex flex-column ml-1">
      <h6 className="card-title text-white">{durationTemplate}</h6>
      <span className="card-text text-white">{`Další svítání: ${fcSelectedDay.sunrise_next}`}</span>
    </div>
  );
}

function DayDuration({ fcSelectedDay }) {
  const { sunrise, sunset, polar } = fcSelectedDay;
  const polarNight = polar === 'n';
  let durationTemplate = '';
  let className = 'card duration-card w-100 mt-3 mb-3 py-1';
  if (polarNight === false) {
    className += ' day';
    const sunriseParts = sunrise.split(':');
    const sunsetParts = sunset.split(':');

    const diffMin = differenceInMinutes(
      new Date(2020, 1, 1, parseInt(sunsetParts[0], 10), parseInt(sunsetParts[1], 10)),
      new Date(2020, 1, 1, parseInt(sunriseParts[0], 10), parseInt(sunriseParts[1], 10))
    );
    const hours = Math.floor(diffMin / 60);
    const min = diffMin - (hours * 60);

    durationTemplate = `Délka dne: ${hours} h ${min} min`;
  } else {
    className += ' night';
    durationTemplate = 'Polární noc';
  }

  return (
    <div className={className}>
      <div className="row mx-0 d-flex flex-row">
        <div className="d-flex justify-content-center align-items-center mx-2">
          {getIcon(polarNight)}
        </div>
        {cardBody(polarNight, durationTemplate, fcSelectedDay)}
      </div>
    </div>
  );
}

DayDuration.propTypes = {
  fcSelectedDay: PropTypes.shape({
    sunrise: timeStringType.isRequired,
    sunset: timeStringType.isRequired,
    polar: PropTypes.string,
  }).isRequired,
};
export default DayDuration;
