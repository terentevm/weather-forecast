import ClearIcon from '../../assets/svg/clear.svg';
import PartlyCloudy from '../../assets/svg/partly-cloudy.svg';
import Cloudy from '../../assets/svg/cloudy.svg';
import Overcast from '../../assets/svg/overcast.svg';
import PartlyCloudyLightRain from '../../assets/svg/partly-cloudy-and-light-rain.svg';
import PartlyCloudyRain from '../../assets/svg/partly-cloudy-and-rain.svg';
import OvercastRain from '../../assets/svg/overcast-and-rain.svg';
import OvercastThunderstormsRain from '../../assets/svg/overcast-thunderstorms-with-rain.svg';
import OvercastWetSnow from '../../assets/svg/overcast-and-wet-snow.svg';
import PartlyCloudyLightSnow from '../../assets/svg/partly-cloudy-and-light-snow.svg';
import OvercastSnow from '../../assets/svg/overcast-and-snow.svg';
import Haze from '../../assets/svg/haze.svg';
import Tornado from "../../assets/svg/tornado.svg";

const conditionsToIcons = new Map();

conditionsToIcons.set('clear', {
  icon: ClearIcon,
  condition: {
    cs: 'Jasno',
    en: 'Clear',
    ru: 'Ясно',
    de: 'klar',
  },
  getClassName: (daytime) => (daytime === 'd' ? 'clear_day' : 'clear_night'),
});

conditionsToIcons.set('partly-cloudy', {
  icon: PartlyCloudy,
  condition: {
    cs: 'Polojasno',
    en: 'Partly cloudy',
    ru: 'Малооблачно',
    de: 'bewölkt',
  },
  getClassName: (daytime) => (daytime === 'd' ? 'cloudy_light_day' : 'cloudy_light_night'),
});

conditionsToIcons.set('cloudy', {
  icon: Cloudy,
  condition: {
    cs: 'Polojasno',
    en: 'Cloudy',
    ru: 'Облачно с прояснениями',
    de: 'bewölkt, manchmal klar',
  },
  getClassName: (daytime) => (daytime === 'd' ? 'cloudy_day' : 'cloudy_night'),
});

conditionsToIcons.set('overcast', {
  icon: Overcast,
  condition: {
    cs: 'Zataženo',
    en: 'Overcast',
    ru: 'пасмурно',
    de: 'bedeckt',
  },
  getClassName: (daytime) => (daytime === 'd' ? 'overcast' : 'cloudy_night'),
});

conditionsToIcons.set('partly-cloudy-and-light-rain', {
  icon: PartlyCloudyLightRain,
  condition: {
    cs: 'Polojasno a slabý déšť',
    en: 'Partly cloudy and light rain',
    ru: 'Небольшой дождь',
    de: 'Teilweise bewölkt und leichter Regen'
  },
  getClassName: (daytime) => (daytime === 'd' ? 'light_rain_day' : 'light_rain_night'),
});

conditionsToIcons.set('partly-cloudy-and-rain', {
  icon: PartlyCloudyRain,
  condition: {
    cs: 'Polojasno a  déšť',
    en: 'Partly cloudy and rain',
    ru: 'Дождь',
    de: 'Teilweise bewölkt und Regen'
  },
  getClassName: (daytime) => (daytime === 'd' ? 'light_rain_day' : 'light_rain_night'),
});

conditionsToIcons.set('overcast-and-rain', {
  icon: OvercastRain,
  condition: {
    cs: 'Zataženo a déšť',
    en: 'Overcast and rain',
    ru: 'Cильный дождь',
    de: 'Bedeckt und Regen'
  },
  getClassName: (daytime) => (daytime === 'd' ? 'rain_day' : 'rain_night'),
});

conditionsToIcons.set('overcast-thunderstorms-with-rain', {
  icon: OvercastThunderstormsRain,
  condition: {
    cs: 'Silný déšť, bouřka',
    en: 'Overcast thunderstorms and rain',
    ru: 'Cильный дождь, гроза',
    de: 'Bedeckte Gewitter und Regen'
  },
  getClassName: (daytime) => (daytime === 'd' ? 'thunderstorm' : 'thunderstorm'),
});

conditionsToIcons.set('cloudy-and-light-rain', {
  icon: PartlyCloudyLightRain,
  condition: {
    cs: 'Polojasno a slabý déšť',
    en: 'Partly cloudy and light rain',
    ru: 'Небольшой дождь',
    de: 'Teilweise bewölkt und leichter Regen'
  },
  getClassName: (daytime) => (daytime === 'd' ? 'light_rain_day' : 'light_rain_night'),
});

conditionsToIcons.set('overcast-and-light-rain', {
  icon: PartlyCloudyRain,
  condition: {
    cs: 'Polojasno a  déšť',
    en: 'Partly cloudy and rain',
    ru: 'Дождь',
    de: 'Teilweise bewölkt und Regen'
  },
  getClassName: (daytime) => (daytime === 'd' ? 'light_rain_day' : 'light_rain_night'),
});

conditionsToIcons.set('cloudy-and-rain', {
  icon: OvercastRain,
  condition: {
    cs: 'Zataženo a déšť',
    en: 'Overcast and rain',
    ru: 'Cильный дождь',
    de: 'Bedeckt und Regen'
  },
  getClassName: (daytime) => (daytime === 'd' ? 'rain_day' : 'rain_night'),
});

conditionsToIcons.set('overcast-and-wet-snow', {
  icon: OvercastWetSnow,
  condition: {
    cs: 'Déšť se sněhem',
    en: 'Overcast and wet snow',
    ru: 'Дождь со снегом',
    de: 'Bedeckter und nasser Schnee'
  },
  getClassName: (daytime) => (daytime === 'd' ? 'rain_snow' : 'rain_snow'),
});

conditionsToIcons.set('partly-cloudy-and-light-snow', {
  icon: PartlyCloudyLightSnow,
  condition: {
    cs: 'Polojasno a slabý sníh',
    en: 'Partly cloudy and snow',
    ru: 'Небольшой снег',
    de: 'Teilweise bewölkt und Schnee'
  },
  getClassName: (daytime) => (daytime === 'd' ? 'snow_night' : 'snow_night'),
});

conditionsToIcons.set('partly-cloudy-and-snow', {
  icon: PartlyCloudyLightSnow,
  condition: {
    cs: 'Sníh',
    en: 'Snow',
    ru: 'Cнег',
    de: 'Schnee'
  },
  getClassName: (daytime) => (daytime === 'd' ? 'snow_night' : 'snow_night'),
});


conditionsToIcons.set('overcast-and-snow', {
  icon: OvercastSnow,
  condition: {
    cs: 'Sněžení',
    en: 'Snowfall',
    ru: 'Cнегопад',
    de: 'Schneefall'
  },
  getClassName: (daytime) => (daytime === 'd' ? 'snow_night' : 'snow_night'),
});

conditionsToIcons.set('cloudy-and-light-snow', {
  icon: OvercastSnow,
  condition: {
    cs: 'Sněžení',
    en: 'Snowy',
    ru: 'Небольшой снег',
    de: 'Schneebedeckt'
  },
  getClassName: (daytime) => (daytime === 'd' ? 'snow_night' : 'snow_night'),
});

conditionsToIcons.set('overcast-and-light-snow', {
  icon: OvercastSnow,
  condition: {
    cs: 'Sněžení',
    en: 'Snowy',
    ru: 'Небольшой снег',
    de: 'Schneebedeckt',
  },
  getClassName: (daytime) => (daytime === 'd' ? 'snow_night' : 'snow_night'),
});

conditionsToIcons.set('cloudy-and-snow', {
  icon: OvercastSnow,
  condition: {
    cs: 'Sněžení',
    en: 'Snow',
    ru: 'Cнег',
    de: 'Schnee'
  },
  getClassName: (daytime) => (daytime === 'd' ? 'snow_night' : 'snow_night'),
});

conditionsToIcons.set("haze", {
	icon: Haze,
	condition: {
		cs: "Mlha",
		en: "Fog",
		ru: "Туман",
    de: 'Nebel'
	},
	getClassName: (daytime) => (daytime === "d" ? "clear_day" : "clear_night"),
});

conditionsToIcons.set("tornado", {
	icon: Tornado,
	condition: {
		cs: "Tornádo",
		en: "Tornado",
		ru: "Торнадо",
    de: 'Tornado'
	},
	getClassName: (daytime) => (daytime === "d" ? "overcast" : "cloudy_night"),
});

// clear — ясно.
// partly-cloudy — малооблачно.
// cloudy — облачно с прояснениями.
// overcast — пасмурно.
// partly-cloudy-and-light-rain — небольшой дождь.
// partly-cloudy-and-rain — дождь.
// overcast-and-rain — сильный дождь.
// overcast-thunderstorms-with-rain — сильный дождь, гроза.
// cloudy-and-light-rain — небольшой дождь.
// overcast-and-light-rain — небольшой дождь.
// cloudy-and-rain — дождь.
// overcast-and-wet-snow — дождь со снегом.
// partly-cloudy-and-light-snow — небольшой снег.
// partly-cloudy-and-snow — снег.
// overcast-and-snow — снегопад.
// cloudy-and-light-snow — небольшой снег.
// overcast-and-light-snow — небольшой снег.
// cloudy-and-snow — снег.

export default conditionsToIcons;
