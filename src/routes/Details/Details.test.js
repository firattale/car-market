import React from 'react';
import Details from './Details';
import { render, screen, wrappedComponent } from '../../helpers/test-utils';

const mockState = {
  colors: {
    data: ['red,blue,green'],
    isLoaded: false
  },
  manufacturers: {
    data: [],
    isLoaded: false
  },
  cars: {
    data: [],
    totalPageCount: 100,
    totalCarsCount: 1000,
    isLoaded: false
  },
  carDetail: {},
  currentPage: 1,
  manufacturer: null,
  sorting: null,
  color: null,
  error: null
};
describe('Details', () => {
  test('renders the Details', async () => {
    const [comp] = wrappedComponent(<Details/>);
    render(comp); // screen.debug();
  });
});
