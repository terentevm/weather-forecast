import React, {useRef, useState, useLayoutEffect} from 'react';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import SunIcon from '../../assets/icons/sun.svg';
import MoonIcon from '../../assets/icons/moon.svg';
import SunriseIcon from '../../assets/icons/sunrise.svg';
import SunsetIcon from '../../assets/icons/sunset.svg';

import useDimensions from "react-use-dimensions";

import './DayDuration.css';

function getIcon(polarNight = false) {
  if (polarNight === false) {
    return (<img src={SunIcon} alt="sun icon" width={68} height={68} />);
  }
  return (<img src={MoonIcon} alt="sun icon" width={68} height={68} />);
}

function cardBody(durationTemplate, sunrise, sunset, lang) {

  return (
    <div className="d-flex flex-column ml-1">
      <h6 className="card-title">{durationTemplate}</h6>
      <span className="card-text">{`${lang.sunrise} - ${sunrise}`}</span>
      <span className="card-text">{`${lang.sunset} - ${sunset}`}</span>
    </div>
  );

}

function DayDuration({ fact, dic }) {

  const [durationRef, blockSize] = useDimensions();

  let divStyle = blockSize ? {height: blockSize.width / 2} :{};

  const { dayDuration, time } = dic;

  const {duration:durationTitle} = dayDuration;
  const { sunrise_hh_mm: sunrise, sunset_hh_mm: sunset, day_duration } = fact;

  const {h:hours, m:min } = day_duration;
  const durationTemplate = `${hours} ${time.h} ${min} ${time.min}`;


  return (
    <div  className="duration-card w-100 px-5">
      <div ref={durationRef} className="duration-wrapper w-100">
        <div className="module-border-wrap" style={divStyle}>
          <div className="module" style={divStyle}>
            <span className="duration-title">{ durationTitle }</span>
            <span className="duration-value">{durationTemplate}</span>

          </div>
        </div>
        <div className="duration-start-end">
          <div className="duration-part-box">
            <div>
              <img src={SunriseIcon} alt="sinrise" width="36px" height="36px" />
            </div>

            <span>{ sunrise }</span>
          </div>
          <div className="duration-part-box">
            <div>
              <img src={SunsetIcon} alt="sinrise" width="36px" height="36px" />
            </div>
            <span>{ sunset }</span>
          </div>
        </div>
      </div>

		</div>
	);
}

export default DayDuration;
