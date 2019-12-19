import React from 'react';
import { connect } from 'react-redux';
import './CurrentWeather.css';
import format from 'date-fns/format';
import addSeconds from 'date-fns/addSeconds';
import windIcon from '../../assets/svg/wind.svg';
import humidityIcon from '../../assets/svg/humidity.svg';
import pressureIcon from '../../assets/svg/pressure_light.svg';
import FavoriteIcon from '../Icons/FavoriteIcon';
import IconUpdate from '../../assets/icons/update.svg';
import MapConditions from '../../Containers/CurrentWeather/MapConditionsToIcons';
import { addLocationToFavorites } from '../../Actions/FaviritesActions';
import { favIndex } from '../../Helpers/helpers';

class Current extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFavorite: false
    };
  }

  componentDidMount() {
    const {favorites, location} = this.props;
    this.setState({
      isFavorite: favIndex(favorites, location) !== -1
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {favorites, location} = this.props;

    if (prevProps.location !== location) {
      this.setState({
        isFavorite: favIndex(favorites, location) !== -1
      });
    } else {
      const isFavoriteNow = favIndex(favorites, location) !== -1;

      if (isFavoriteNow !== prevState.isFavorite) {
        this.setState({
          isFavorite: isFavoriteNow
        });
      }
    }
  }

  addToFav = () => {
    this.props.dispatch(addLocationToFavorites(this.props.location));
  };

  getLocationDateTime(locationInfo, localDate = new Date()) {
    const addSec = localDate.getTimezoneOffset() * 60 + locationInfo.tzinfo.offset;
    return addSeconds(localDate, addSec);
  }

  render() {
    let {dateNow} = this.props;
    const {localeOptions, location, info, fact} = this.props;

    const cond = MapConditions.get(fact.condition);

    const condition = cond.condition.cs;

    let dayOfWeek = '-';
    let dateStr = '-';
    let timeStr = '-';

    if (info) {
      if (!dateNow) {
        dateNow = new Date();
      }

      const locationDateTime = this.getLocationDateTime(info, dateNow);

      dayOfWeek = format(locationDateTime, 'EEEE', localeOptions);
      dateStr = format(locationDateTime, 'dd MMMM yyyy', localeOptions);
      timeStr = format(locationDateTime, 'HH:mm', localeOptions);
    }

    const iconUpdateClassName = this.props.processing === true ? 'processing' : '';

    return (
    <div
      className="card current-card"
      id="id_current_weather_layout"
      data-testid="w_current_wrapper"
    >
      <div className="card-body">
        <div className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-row justify-content-start align-items-center">
            <h5
              className="card-title text-white"
              id="w_current_loc_title"
              data-testid="w_current_loc_title"
            >
              {`${location.name}, ${location.country}`}
            </h5>
            <span
              id="w_current_add_to_fav_btn"
              className="current_favorite_icon mb-2 ml-2"
              data-testid="w_current_add_to_fav_btn"
              onClick={this.addToFav}
            >
              <FavoriteIcon
                isFavorite={this.state.isFavorite}
                fill={'#fcc603'}
                width="24"
                height="24"
              />
            </span>
          </div>
          <span>
            <img
              id="w_current_update_icon"
              src={IconUpdate}
              alt="update icon"
              width="24"
              height="24"
              className={iconUpdateClassName}
              data-testid="w_current_update_icon"
            />
          </span>
        </div>

        <h6
          id="w_current_today_title"
          className="card-subtitle mb-2 text-white text-muted"
          data-testid="w_current_today_title"
        >
          Dnes {`${dayOfWeek}, ${dateStr}, ${timeStr}`}
        </h6>
        <div className="d-flex flex-row">
          <div>
            <span
              id="w_current_fact_temp"
              className="current_temp text-white"
              data-testid="w_current_fact_temp"
            >
              {fact.temp} &#176;С
            </span>
          </div>
          <div className="current_img mx-3">
            <img src={cond.icon} width="48" height="48" alt=""/>
          </div>
          <div className="d-flex flex-column justify-content-center ml-2">
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
              Pocitově {fact.feels_like}
            </span>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-start mt-2">
          <div>
            <img src={windIcon} width="24" height="24" alt=""/>
            <span
              id="w_current_wind_speed"
              className="text-white ml-1"
              data-testid="w_current_wind_speed"
            >
              {fact.wind_speed} m/sec
            </span>
          </div>
          <div className="ml-5">
            <img src={humidityIcon} width="24" height="24" alt="humidity icon"/>
            <span
              id="w_current_humidity"
              className="text-white ml-1"
              data-testid="w_current_humidity"
            >
              {fact.humidity} %
            </span>
          </div>
          <div className="ml-5">
            <img src={pressureIcon} width="24" height="24" alt="pressure icon"/>
            <span
              id="w_current_pressure_mm"
              className="text-white ml-1"
              data-testid="w_current_pressure_mm"
            >
              {fact.pressure_mm} mm
            </span>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    localeOptions: state.weather.localeOptions,
    location: state.weather.location,
    info: state.weather.info,
    fact: state.weather.fact,
    processing: state.weather.processing,
    favorites: state.favorites.all
  };
};
export default connect(mapStateToProps)(Current);
