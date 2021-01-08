import React, {useContext} from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import {LanguageContext} from "../../Providers/LanguageProvider";
import './forecast.css'
import ForecastMobileDay from "./ForecastDay";

export default () => {
  const { dictionary, language } = useContext(LanguageContext);

  const { forecasts} = useSelector(state => ({
    forecasts: state.weather.forecasts,
  }), shallowEqual);

  const forecastList = forecasts.map((item) => {
  
    return (
      <ForecastMobileDay forecast={item} key={item.dt} dic={dictionary} language={language}/>
    );
  });

  return (
    <div className="forecast_layout" data-testid="fc_mobile_wrapper">
      { forecastList }
    </div>
  );
}