import axios from 'axios';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fakeAutocompleteResponse from './Fakers/fakeAutocompleteResponse';
import {
  REQUEST_LOCATIONS_SUCCESS,
  REQUEST_LOCATIONS_FAILED,
  findLocation,
} from '../Actions/LocationAction';
import weatherReducer from '../Reducers/WeatherReducer';

jest.mock('axios');

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

const AutocompleteSuccess = {
  type: REQUEST_LOCATIONS_SUCCESS,
  payload: fakeAutocompleteResponse.results,
};

const AutocompleteFailure = {
  type: REQUEST_LOCATIONS_FAILED,
  payload: [],
};

const expectedAutocompleteSuccess = [
  AutocompleteSuccess,
];

const expectedAutocompleteFailure = [
  AutocompleteFailure,
];

describe('test actions dispatched for autocomplete', () => {
  it('fetch the location list successfully', () => {
    const resp = { data: fakeAutocompleteResponse };

    axios.get.mockImplementationOnce(() => Promise.resolve(resp));

    const store = mockStore({ locationList: [] });

    store.dispatch(findLocation('london')).then(() => {
      expect(store.getActions()).toEqual(expectedAutocompleteSuccess);
    });
  });

  it('fetch the location list erroneously ', () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error('Some error')));
    const store = mockStore({ locationList: [] });

    store.dispatch(findLocation('london')).then(() => {
      expect(store.getActions()).toEqual(expectedAutocompleteFailure);
    });
  });

  it('test reducer after fetch autocomplete list', () => {
    const reducer = combineReducers({ weather: weatherReducer });

    expect(reducer(undefined, {}).weather.locationList).toEqual([]);

    expect(reducer(undefined, AutocompleteSuccess).weather.locationList)
      .toEqual(fakeAutocompleteResponse.results);
  });
});
