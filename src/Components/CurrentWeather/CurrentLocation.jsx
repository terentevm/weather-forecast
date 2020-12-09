import React from 'react';
import FavoriteIcon from "../Icons/FavoriteIcon";
import IconUpdate from '../../assets/icons/update.svg';
import format from "date-fns/format";
import addSeconds from "date-fns/addSeconds";

function ProcessingIcon({ processing }) {
  if (processing === true) {
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

  return '';
}

function getLocationDateTime(offsetMin, localDate = new Date()) {
  const addSec = localDate.getTimezoneOffset() * 60 + offsetMin * 60;
  return addSeconds(localDate, addSec);
}

export default function ({ location, dateinfo, processing, addToFavorite, isFavorite, dic}) {

  let dayOfWeek = '-';
  let dateStr = '-';
  let timeStr = '-';

  if (dateinfo instanceof Object) {

    const localDate = getLocationDateTime(dateinfo.offset);

    dayOfWeek = format(localDate, 'EEEE', {locale: dic.locale});
    dateStr = format(localDate, 'dd MMMM yyyy', {locale: dic.locale});
    timeStr = format(localDate, 'HH:mm', {locale: dic.locale});
  }

  return (
    <div>
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
            onClick={ addToFavorite }
          >
            <FavoriteIcon
              isFavorite={isFavorite}
              fill={"#fcc603"}
              width="24"
              height="24"
            />
          </span>
        </div>
        <ProcessingIcon processing={ processing }/>
      </div>
      <h6
        id="w_current_today_title"
        className="card-subtitle mb-2 text-white"
        data-testid="w_current_today_title"
      >
        {`${dic.weatherDic.today} ${dayOfWeek}, ${dateStr}, ${timeStr}`}
      </h6>
    </div>
  );
}