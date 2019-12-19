import axios from 'axios';

let connection = null;

class Connection {
  constructor() {
    this.host = 'https://tm-weather.herokuapp.com';
  }

  async findLocation(search) {
    try {
      const res = await axios.get(`${this.host}/api/autocomplete/?query=${search.trim()}`);

      if (Object.prototype.hasOwnProperty.call(res.data, 'results')) {
        return res.data.results;
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

      if (Object.prototype.hasOwnProperty.call(res.data, 'fact')) {
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

      if (Object.prototype.hasOwnProperty.call(res.data, 'location')) {
        return res.data.location;
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
