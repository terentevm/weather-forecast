const fs = require('fs');
const path = require('path');

const json = fs.readFileSync(path.resolve(__dirname, './yandexResponse.json'));

const res = JSON.parse(json);

const { info, fact, forecasts } = res;
export { info, fact, forecasts };
