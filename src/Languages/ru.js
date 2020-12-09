import localeRu from 'date-fns/locale/ru';

const ru = {
  pageTitle: 'Прогноз погоды',
  title: 'Погода',
  search: {
    placeholder: 'Город',
    loadingPlaceholder: 'Данные загружаются...'
  },
  locale: localeRu,
  weatherDic: {
    conditions: 'Условия',
    today: 'Сегодня',
    temp: 'Температура',
    feelsLike: 'Ощущается как',
    pressure: 'Давление',
    wind: 'Ветер',
    humidity: 'Влажность',
    wind_um: 'м/сек',
    pressure_um: 'мм',
    uvi: 'УФ'
  },
  time: {
    h: 'ч',
    m: 'м',
    min: 'мин'
  },
  dayParts: {
    morning: 'Утро',
    day: 'День',
    evening: 'Вечер',
    night: 'Ночь'
  },
  dayDuration: {
    duration: 'Длина дня',
    sunrise: 'Восход',
    sunset: 'Закат'
  },
  forecast: {
    title: 'Прогноз на 7 дней'
  }

};

export default ru;