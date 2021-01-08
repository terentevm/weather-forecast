import React from 'react';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import SunIcon from '../../assets/icons/sun.svg';
import TimerIcon from '../../assets/icons/timer.svg';
import SunriseIcon from '../../assets/icons/sunrise.svg';
import SunsetIcon from '../../assets/icons/sunset.svg';

export default function ({ fact, dic }) {
  const { dayDuration, time } = dic;

  console.dir(dayDuration);
  console.dir(time);
  const {duration:durationTitle} = dayDuration;
  const { sunrise_hh_mm: sunrise, sunset_hh_mm: sunset, day_duration } = fact;

  const {h:hours, m:min } = day_duration;
  const durationTemplate = `${hours} ${time.h} ${min} ${time.min}`;

  return (
    <div className="row">
      <div className="col-4 d-flex flex-column justify-content-center align-items-center">
        <span className="text-white">{dayDuration.sunrise}</span>
        <div>
          <img src={SunriseIcon} alt="sinrise" width="36px" height="36px" />
        </div>
        <span className="text-white">{ sunrise }</span>
      </div>
      <div className="col-4 d-flex flex-column justify-content-center align-items-center">
        <span className="text-white">{dayDuration.sunset}</span>
        <div>
          <img src={SunsetIcon} alt="sinrise" width="36px" height="36px" />
        </div>
        <span className="text-white">{ sunset }</span>
      </div>
      <div className="col-4 d-flex flex-column justify-content-center align-items-center">
        <span className="text-white">{dayDuration.duration}</span>
        <div>
          <img src={TimerIcon} alt="sinrise" width="36px" height="36px" />
        </div>
        <span className="text-white">{ durationTemplate }</span>
      </div>
    </div>
  );
}