import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Current from '../Current';
import fakeStore from '../../../Tests/Fakers/FakeStore';

afterEach(cleanup);

it('check render current weather card without crashing', () => {

  const {
    localeOptions,
    location,
    info,
    fact,
  } = fakeStore.weather;
  const favorites = fakeStore.favorites.all;

  const { getByTestId } = render(<Current
    localeOptions={localeOptions}
    location={location}
    info={info}
    fact={fact}
    favorites={favorites}
    processing
  />);

  const wrapper = getByTestId('w_current_wrapper');
  const title = getByTestId('w_current_loc_title');
  const addToFavBtn = getByTestId('w_current_add_to_fav_btn');
  const updateIcon = getByTestId('w_current_update_icon');
  const todayTitle = getByTestId('w_current_today_title');
  const factTempr = getByTestId('w_current_fact_temp');
  const factCondition = getByTestId('w_current_condition');
  const factFeelsLike = getByTestId('w_current_feels_like');
  const factWindSpeed = getByTestId('w_current_wind_speed');
  const factHumidity = getByTestId('w_current_humidity');
  const factPressure = getByTestId('w_current_pressure_mm');


  expect(wrapper).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(addToFavBtn).toBeInTheDocument();

  expect(updateIcon).toBeInTheDocument();
  expect(updateIcon).toHaveClass('processing');
  expect(todayTitle).toBeInTheDocument();
  expect(factTempr).toBeInTheDocument();
  expect(factCondition).toBeInTheDocument();
  expect(factFeelsLike).toBeInTheDocument();
  expect(factWindSpeed).toBeInTheDocument();
  expect(factHumidity).toBeInTheDocument();
  expect(factPressure).toBeInTheDocument();
});

it('check render current weather card and check content', () => {
  fakeStore.weather.processing = true;
  const dateNow = new Date('2019-12-16T11:00:00');

  const {
    localeOptions,
    location,
    info,
    fact,
  } = fakeStore.weather;
  const favorites = fakeStore.favorites.all;

  const { getByTestId } = render(<Current
    localeOptions={localeOptions}
    location={location}
    info={info}
    fact={fact}
    favorites={favorites}
    dateNow={dateNow}
    processing={true}
  />);


  const wrapper = getByTestId('w_current_wrapper');
  const title = getByTestId('w_current_loc_title');
  const addToFavBtn = getByTestId('w_current_add_to_fav_btn');
  const updateIcon = getByTestId('w_current_update_icon');
  const todayTitle = getByTestId('w_current_today_title');
  const factTempr = getByTestId('w_current_fact_temp');
  const factCondition = getByTestId('w_current_condition');
  const factFeelsLike = getByTestId('w_current_feels_like');
  const factWindSpeed = getByTestId('w_current_wind_speed');
  const factHumidity = getByTestId('w_current_humidity');
  const factPressure = getByTestId('w_current_pressure_mm');


  expect(wrapper).toBeInTheDocument();
  expect(title).toHaveTextContent('Gorki, Russia');
  expect(addToFavBtn).toBeInTheDocument();

  expect(updateIcon).toBeInTheDocument();
  expect(updateIcon).toHaveClass('processing');
  expect(todayTitle).toHaveTextContent('Dnes pondělí, 16 prosince 2019, 13:00');
  expect(factTempr).toHaveTextContent('-1 °С');
  expect(factCondition).toHaveTextContent('Déšť se sněhem');
  expect(factFeelsLike).toHaveTextContent('-5');
  expect(factWindSpeed).toHaveTextContent('3 m/sec');
  expect(factHumidity).toHaveTextContent('100 %');
  expect(factPressure).toHaveTextContent('751 mm');
});
