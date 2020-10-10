import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Page404 from './Page404';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

it('should show the content of 404 Page', () => {
  render(<Router><Page404 /></Router>);
  screen.getByText('404 - Not Found');
  screen.getByText('Sorry, the page you are looking for does not exist.');
  screen.getByTestId('logo-image');
  screen.getByText((content, node) => {
    const hasText = (node) => node.textContent === 'You can always go back to the homepage.';
    const nodeHasText = hasText(node);
    const childrenDontHaveText = Array.from(node.children).every(
      (child) => !hasText(child)
    );

    return nodeHasText && childrenDontHaveText;
  });
});

it('should redirect to home page if you click on homePage', () => {
  const history = createMemoryHistory();
  render(<Router history={history}><Page404 /></Router>);
  const homeNav = screen.getByTestId('homepage-nav');
  homeNav.click();
  expect(history.location.pathname).toBe('/');
});
