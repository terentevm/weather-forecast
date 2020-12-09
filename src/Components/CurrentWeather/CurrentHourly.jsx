import React from 'react';
import MapConditions from '../../Containers/CurrentWeather/MapConditionsToIcons';
import ScrollMenu from "react-horizontal-scrolling-menu";
import './hourly.css';

function ForecastHour({ forecast, dic }) {
  const cond = MapConditions.get(forecast.cond);
  return (
		<div className="hour_card">
			<div className="text-white">{forecast.hour}{dic.time.h}</div>
			<span className="text-white">{Math.round(forecast.temp)}&#176;</span>
			<div>
				<img src={cond.icon} width="24" height="24" alt="" />
			</div>
		</div>
	);
}

function CurrentHourly({ hourly, dic }) {

  const Arrow = ({ text, className }) => {
    return (
      <div
        className={className}
      >
				{text}
      </div>
    );
  };
  const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
  const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

  console.log('hourly');
  console.dir(hourly);
	let cnt = 0;
	const forecastList = hourly.map((item) => {
		cnt++;
		return <ForecastHour forecast={item} dic={dic} key={`h_${cnt}`}/>;
	});

	return (
		<div style={{ height: `100px` }}>
      <ScrollMenu
        data={forecastList}
        wheel={false}
        transition={0.3}
        translate={0}
        alignCenter={true}
        clickWhenDrag={false}
        dragging={true}
        hideArrows={true}
        hideSingleArrow={true}
        scrollBy={1}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
      />
		</div>
	);
}

export default CurrentHourly;
