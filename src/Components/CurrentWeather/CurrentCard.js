import React from 'react';
import './CurrentWeather.css';

export default function ({ condClassName, children}) {
  const cardClassName = `card current-card ${condClassName}`;

  return (
    <div
      className={cardClassName}
      id="id_current_weather_layout"
      data-testid="w_current_wrapper"
    >
      <div className="card-body card-canvas">
        { children }
      </div>
    </div>
  );
}