import React from 'react';
import { createStore } from 'redux';
import customRender from '../../../Tests/customRender';
import NavBar from '../NavBar';
import fakeStore from '../../../Tests/Fakers/FakeStore';

it('render nav bar, and check favorite count value', () => {

  const store = createStore(() => (fakeStore));

  const { getByTestId } = customRender(<NavBar />, { store });
  const nav = getByTestId('navbar-top');
  const spanFavoritesCount = getByTestId('nav-fv-count');

  expect(nav).toBeInTheDocument();
  expect(spanFavoritesCount).toBeInTheDocument();
  expect(spanFavoritesCount).toHaveTextContent('3');
});