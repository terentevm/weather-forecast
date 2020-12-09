import axios from 'axios';

let connection = null;

class Connection {
  constructor() {
    //this.host = 'https://tm-weather-js-api.herokuapp.com/';
    this.host = '';
    this.host = "http://localhost:9000";
  }

  async findLocation(search) {
    try {
      const res = await axios.get(`${this.host}/api/autocomplete/?q=${search.trim()}`);

      if (res.status === 200 && res.data instanceof Array) {
        return res.data;
      }

      return [];
    } catch (e) {
      throw e;
    }
  }

  async getForecast(query) {
    try {
      const res = await axios.get(`${this.host}/api/forecast/`, {
        params: {
          lat: query.lat,
          lon: query.lon,
          limit: query.limit,
        },
      });

      if (Object.prototype.hasOwnProperty.call(res.data, 'current')) {
        return res.data;
      }

      return [];
    } catch (e) {
      throw e;
    }
  }

  async getCurrentInfo(query) {
    const options = {};

    if (query instanceof Object) {
      options.params = query;
    }

    try {
      const res = await axios.get(`${this.host}/api/current/`, options);

      if (res.status === 200) {
        return res.data;
      }
      
      return [];
    } catch (e) {
      throw e;
    }
  }
}

export default function getConn() {
  if (connection === null) {
    connection = new Connection();
  }

  return connection;
}
