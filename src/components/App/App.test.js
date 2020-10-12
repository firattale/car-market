import React from 'react';
import App from './App';
import { render } from '../../helpers/test-utils';

describe('App', () => {
  test('renders the App', async () => {
    render(<App/>);
  });
});
