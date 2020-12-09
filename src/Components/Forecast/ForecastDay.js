import React from 'react';
import HumidityIcon from '../Icons/HumidityIcon';
import PressureIcon from '../Icons/PressureIcon';
import WindIcon from '../Icons/WindIcon';

import MapConditions from '../../Containers/CurrentWeather/MapConditionsToIcons';
import format from 'date-fns/format';

import { fromUnixTime } from 'date-fns'

export default ({ forecast, dic, language }) => {
	const { weatherDic, locale } = dic;

	const options = {
		locale: locale,
	};
	const fcDate = fromUnixTime(forecast.dt);

	let dayOfWeek = format(fcDate, "EEEE", options);
	dayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);

	const dayFormated = format(fcDate, "dd.MM", options);
	const cond = MapConditions.get(forecast.condition);

	const condition = cond.condition[language.id];

	return (
		<div class="day-card">
			{" "}
			<span class="icon">
				<img class="img-fluid" src={cond.icon} width="56" height="56" alt="" />
			</span>
			<div class="title">
				<p>
					{dayOfWeek} {dayFormated}
				</p>
			</div>
			<div class="temp">
				+20<sup>&deg;</sup>
			</div>
			<div class="row">
				<div class="col-4">
					<div class="header">{weatherDic.conditions}</div>
					<div class="value">{condition}</div>
				</div>
				<div class="col-4">
					<div class="header">{weatherDic.humidity}</div>
					<div class="value">{forecast.humidity}%</div>
				</div>
				<div class="col-4">
					<div class="header">{weatherDic.wind}</div>
					<div class="value">
						{forecast.wind_speed} {weatherDic.wind_um}
					</div>
				</div>
			</div>
		</div>
	);
}