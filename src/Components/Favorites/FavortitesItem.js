import React, {useState, useEffect} from "react";

import {ScaleLoader} from 'react-spinners';
import getConn from '../../api/index';
import MapConditions from '../../Containers/CurrentWeather/MapConditionsToIcons';
import './favorites.css';
export default function ({location, onSelectHandler}) {
  const [loading, setLoading] = useState(true);
  const [temperature, setTemperature] = useState(0);
  const [condition, setCondition] = useState("");
  const color = '#37aff1';

  useEffect(()=>{

    const conn = getConn();

    conn.getForecast({
      lat: location.lat,
      lon: location.lon,
      limit: 7,
    }).then(res => {

      setTemperature(res.current.temp);
      setCondition(res.current.condition);

    }).finally(()=> {
      setLoading(false);
    });

  }, [location]);

  const RightColumn = ({ isLoading, temp}) =>{
    if (loading === true) {
      return (
        <div>
          <ScaleLoader
            loading={isLoading}
            color={color}
          />
        </div>
      )
    }

    const cond = MapConditions.get(condition);

    return (
      <div className="d-flex flex-row justify-content-start align-items-center">
        <span className="mx-2">{Math.round(temp)} &#176;С</span>
        <span className="mx-2">
          <img src={cond.icon} width="24" height="24" alt=""/>
        </span>
      </div>
    )
  }

  const onClick = () => { onSelectHandler(location) };

  return (
    <li className="favorites-li d-flex flex-row justify-content-between" onClick={ onClick }>
      <div className="d-flex flex-column">
        <span className="location-name">{ location.name }</span>
        <span className="location-name">{ `${location.country}, ${location.region}` }</span>
      </div>
      <RightColumn
        isLoading={loading}
        temp={temperature}
      />
    </li>
  );
}