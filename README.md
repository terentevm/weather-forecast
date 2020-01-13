
## Available Scripts

For install use command `npm install`

For run app in the development mode `npm start`

For run tests `npm test`

## Used libraries

1. date-dns - For working with dates. In my opinion, it library is better for use in small applications then "moment.js", because "date-fns" can be tree-shaked, unlike moment.js.
2. axios - for http requests.
3. bootstrap - as a css framework 

This application deployed to heroku and available on http://tm-weather.herokuapp.com,
this domain also used as api proxy to forecasts end-points:
1. Autocomplete data source https://weatherstack.com/
2. Current weather and forecast https://api.weather.yandex.ru/v1/forecast