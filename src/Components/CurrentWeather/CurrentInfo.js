import React from 'react';
import windIcon from "../../assets/svg/wind.svg";
import humidityIcon from "../../assets/svg/humidity.svg";
import pressureIcon from "../../assets/svg/pressure_light.svg";

export default function ({ fact, cond, dic, language}) {
  const condition = cond.condition[language.id];
  const { weatherDic } = dic;
  return (
    <div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
          <div className="row mx-0">
            <span
              id="w_current_fact_temp"
              className="current_temp text-white"
              data-testid="w_current_fact_temp"
            >
              {Math.round(fact.temp)} &#176;С
            </span>
            <div className="current_img ml-3">
              <img src={cond.icon} width="48" height="48" alt="" />
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
          <div className="row mx-0 d-flex flex-column justify-content-center mt-2">
            <span
              id="w_current_condition"
              className="text-white"
              data-testid="w_current_condition"
            >
              {condition}
            </span>
            <span
              id="w_current_feels_like"
              className="text-white"
              data-testid="w_current_feels_like"
            >
              {weatherDic.feelsLike} {Math.round(fact.feels_like)}&#176;С
            </span>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between mt-2 addInfo">
        <div className="d-flex flex-column justify-content-center align-items-center mr-2">
          <span className="text-white">{weatherDic.wind}</span>
          <img src={windIcon} width="24" height="24" alt="" />
          <span
            id="w_current_wind_speed"
            className="text-white ml-1"
            data-testid="w_current_wind_speed"
          >
            {fact.wind_speed} {weatherDic.wind_um}
          </span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mr-2">
          <span className="text-white">{weatherDic.humidity}</span>
          <img
            src={humidityIcon}
            width="24"
            height="24"
            alt="humidity icon"
          />
          <span
            id="w_current_humidity"
            className="text-white ml-1"
            data-testid="w_current_humidity"
          >
            {fact.humidity} %
          </span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mr-2">
          <span className="text-white">{weatherDic.pressure}</span>
          <img
            src={pressureIcon}
            width="24"
            height="24"
            alt="pressure icon"
          />
          <span
            id="w_current_pressure_mm"
            className="text-white ml-1"
            data-testid="w_current_pressure_mm"
          >
            {fact.pressure_mm} {weatherDic.pressure_um}
          </span>
        </div>
      </div>
    </div>
  );
}