import React from 'react';
import { connect } from 'react-redux';
import CurrentCard from '../../Components/CurrentWeather/Current';
import DayDurationCard from '../../Components/CurrentDayDuration/DayDuration';

function Duration(fcSelectedDay) {
  if (fcSelectedDay) {
    return (
      <DayDurationCard fcSelectedDay={fcSelectedDay} />
    );
  }
  return '';
}

function CurrentContainer({
  localeOptions,
  location,
  info,
  fact,
  favorites,
  fcSelectedDay,
  processing,
  dispatch,
}) {
  return (
    <div>
      <div className="row mx-0">
        <CurrentCard
          localeOptions={localeOptions}
          location={location}
          info={info}
          fact={fact}
          favorites={favorites}
          processing={processing}
          dispatch={dispatch}
        />
      </div>
      <div className="row mx-0">
        {Duration(fcSelectedDay)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  localeOptions: state.weather.localeOptions,
  location: state.weather.location,
  info: state.weather.info,
  fact: state.weather.fact,
  processing: state.weather.processing,
  favorites: state.favorites.all,
  fcSelectedDay: state.weather.fcSelected,
});

export default connect(mapStateToProps, null)(CurrentContainer);
