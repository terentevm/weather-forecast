import localeCZ from 'date-fns/locale/cs';

const cs = {
  pageTitle: 'Počasí',
  title: 'Počasí',
  search: {
    placeholder: 'Město',
    loadingPlaceholder: 'Data se načítají...'
  },
  locale: localeCZ,
  weatherDic: {
    conditions: 'Počasí',
    today: 'Dnes',
    temp: 'Teplota',
    feelsLike: 'Pocitově',
    pressure: 'Tlak',
    wind: 'Vítr',
    humidity: 'Vlhkost',
    wind_um: 'm/sec',
    pressure_um: 'mm',
    uvi: 'uvi'
  },
  time: {
    h: 'h',
    m: 'm',
    min: 'min'
  },
  dayParts: {
    morning: 'Ráno',
    day: 'Den',
    evening: 'Večer ',
    night: 'Noc'
  },
  dayDuration: {
    duration: 'Délka dne',
    sunrise: 'Východ slunce',
    sunset: 'Západ slunce'
  },
  forecast: {
    title: 'Předpověď na 7 dny'
  },
  favorites: {
    header: "Vybrané lokality"
  }

};

export default cs;