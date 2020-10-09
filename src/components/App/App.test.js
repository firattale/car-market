import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

it('should show the content of 404 Page', () => {
  render(<Router><App /></Router>);
  screen.getByText('Purchase');
  screen.getByText('My Orders');
  screen.getByText('Sell');
  screen.getByText('© AUTO1 Group 2018');

  const image = screen.getByTestId('logo-image');
  expect(image).toBeInTheDocument();
});

// it('should redirect to home page if you click on homePage', () => {
//   const history = createMemoryHistory();
//   render(<Router history={history}><Page404 /></Router>);
//   const homeNav = screen.getByTestId('homepage-nav');
//   homeNav.click();
//   expect(history.location.pathname).toBe('/');
// });
