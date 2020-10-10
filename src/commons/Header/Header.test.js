import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '.';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

it('should show the content of navbar', () => {
  render(<Router><Header /></Router>);
  screen.getByText('Purchase');
  screen.getByText('My Orders');
  screen.getByText('Sell');
  const image = screen.getByTestId('logo-image');
  expect(image).toBeInTheDocument();
});
it('should redirect to home page if you click on logo', () => {
  const history = createMemoryHistory();
  render(<Router history={history}><Header /></Router>);
  const image = screen.getByTestId('logo-image');
  image.click();
  expect(history.location.pathname).toBe('/');
});
