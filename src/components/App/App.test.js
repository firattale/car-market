import React from 'react';
import App from './App';
import { render, wrappedComponent } from '../../helpers/test-utils';

describe('App', () => {
  test('renders the App', async () => {
    const [comp] = wrappedComponent(<App/>);
    render(comp);
  });
});
