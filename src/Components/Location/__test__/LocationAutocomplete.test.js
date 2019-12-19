import React from 'react';
import ReactDom from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Autocomplete from '../Autocomplete';
import '@testing-library/jest-dom/extend-expect';

import testLocations from './TestLocations';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  const searchOnInput = () => {
  };
  const searchOnClear = () => {
  };
  const onSelect = () => {
  };
  ReactDom.render(<Autocomplete
    locations={[]}
    searchOnInput={searchOnInput}
    searchOnClear={searchOnClear}
    onSelect={onSelect}
  />, div);
});

it('check input value', () => {
  const searchOnInput = jest.fn();
  const searchOnClear = jest.fn();

  const onSelect = () => {
  };
  const { getByTestId } = render(<Autocomplete
    locations={[]}
    searchOnInput={searchOnInput}
    searchOnClear={searchOnClear}
    onSelect={onSelect}
  />);


  const input = getByTestId('ac_input');
  const btnClear = getByTestId('ac_input_clear_btn');

  expect(input).toBeInTheDocument();
  expect(btnClear).toBeInTheDocument();

  fireEvent.change(input, { target: { value: 'buenos' } });

  expect(input).toHaveValue('buenos');
  expect(searchOnInput).toHaveBeenCalledTimes(1);

  fireEvent(
    btnClear,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );

  expect(searchOnClear).toHaveBeenCalledTimes(1);
  expect(input).toHaveValue('');
});

it('check that dropdown not rendered', () => {
  const searchOnInput = () => {
  };
  const searchOnClear = () => {
  };
  const onSelect = () => {
  };
  const { queryByTestId } = render(<Autocomplete
    locations={[]}
    searchOnInput={searchOnInput}
    searchOnClear={searchOnClear}
    onSelect={onSelect}
  />);

  expect(queryByTestId('ac_dropdown')).toBeNull();
});

it('check that dropdown is rendered', () => {
  const searchOnInput = () => {
  };
  const searchOnClear = () => {
  };
  const onSelect = () => {
  };
  const { queryByTestId } = render(<Autocomplete
    locations={testLocations}
    searchOnInput={searchOnInput}
    searchOnClear={searchOnClear}
    onSelect={onSelect}
  />);

  expect(queryByTestId('ac_dropdown')).toBeInTheDocument();
  expect(queryByTestId('ac_dropdown').children.length).toBe(testLocations.length);
});

it('test dropdown items selection', () => {
  const searchOnInput = () => {
  };
  const searchOnClear = () => {
  };
  const onSelect = jest.fn();

  const { queryByTestId } = render(<Autocomplete
    locations={testLocations}
    searchOnInput={searchOnInput}
    searchOnClear={searchOnClear}
    onSelect={onSelect}
  />);


  expect(queryByTestId('ac_dropdown')).toBeInTheDocument();
  expect(queryByTestId('ac_dropdown').children.length).toBe(testLocations.length);

  const li = queryByTestId('ac_dropdown_item_1');

  expect(li).toBeInTheDocument();

  fireEvent(
    li,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );

  expect(onSelect).toHaveBeenCalledTimes(1);
});

// it("check that after click on clean icon input doesn't contain text", ()=>{
//
//     let search = 'buenos';
//     const searchOnInput = ()=>{};
//     const searchOnClear = ()=>{};
//     const onSelect = ()=>{};
//     const { queryByTestId } = render(<Autocomplete
//     search={search}
//     locations={testLocations}
//     searchOnInput={searchOnInput}
//     searchOnClear={searchOnClear}
//     onSelect={onSelect}
//     />);
//
//     const input = queryByTestId('ac_input');
//     const iconClean = queryByTestId('ac_input_clear_btn');
//
//     expect(input).toHaveValue('buenos');
//     expect(iconClean).toBeInTheDocument();
//
//     fireEvent.click(iconClean);
//
//     expect(input).toHaveValue('');
//
// });
