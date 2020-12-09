import React from 'react';
import HourlyForecast from './CurrentHourly';
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

  getLocationDateTime(offsetMin, localDate = new Date()) {
    const addSec = localDate.getTimezoneOffset() * 60 + offsetMin * 60;
    return addSeconds(localDate, addSec);
  }

  render() {

    const {localeOptions, location, fact} = this.props;


    const cond = MapConditions.get(fact.condition);

    const condition = cond.condition.cs;

    let dayOfWeek = '-';
    let dateStr = '-';
    let timeStr = '-';

    if ('dateinfo' in fact) {

      const localDate = this.getLocationDateTime(fact.dateinfo.offset);

      dayOfWeek = format(localDate, 'EEEE', localeOptions);
      dateStr = format(localDate, 'dd MMMM yyyy', localeOptions);
      timeStr = format(localDate, 'HH:mm', localeOptions);
    }

    const processingIconRender = () => {
      if (this.props.processing === true) {
        return (
        <span>
            <img
            id="w_current_update_icon"
            src={IconUpdate}
            alt="update icon"
            width="24"
            height="24"
            className="processing"
            data-testid="w_current_update_icon"
            />
          </span>
        );
      }
    };

    let cardClassName = 'card current-card ' + cond.getClassName(fact.day_part);
    return (
			<div
				className={cardClassName}
				id="id_current_weather_layout"
				data-testid="w_current_wrapper"
			>
				<div className="card-body card-canvas">
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
									fill={"#fcc603"}
									width="24"
									height="24"
								/>
							</span>
						</div>
						{processingIconRender()}
					</div>

					<h6
						id="w_current_today_title"
						className="card-subtitle mb-2 text-white"
						data-testid="w_current_today_title"
					>
						Dnes {`${dayOfWeek}, ${dateStr}, ${timeStr}`}
					</h6>
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
									Pocitově {fact.feels_like}&#176;С
								</span>
							</div>
						</div>
					</div>
					<div className="d-flex flex-row justify-content-between mt-2 addInfo">
						<div className="d-flex flex-column justify-content-center align-items-center mr-2">
							<span className="text-white">Vítr</span>
							<img src={windIcon} width="24" height="24" alt="" />
							<span
								id="w_current_wind_speed"
								className="text-white ml-1"
								data-testid="w_current_wind_speed"
							>
								{fact.wind_speed} m/sec
							</span>
						</div>
						<div className="d-flex flex-column justify-content-center align-items-center mr-2">
							<span className="text-white">Vlhkost</span>
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
							<span className="text-white">Tlak</span>
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
								{fact.pressure_mm} mm
							</span>
						</div>
					</div>
					<div className="">
            <HourlyForecast hourly={fact.hourly} />
          </div>
				</div>
			</div>
		);
  }
}

export default Current;
