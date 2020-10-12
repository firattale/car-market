import React from 'react';
import Home from './Home';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import { initialState } from '../../app/carsSlice';
const mockStore = configureMockStore([thunk]);

const mockState = {
  ...initialState,
  ...{
    cars: {
      data: {
        stockNumber: 10020,
        manufacturerName: 'Skoda',
        modelName: 'Karoq',
        color: 'white',
        mileage: {
          number: 174045,
          unit: 'km'
        },
        fuelType: 'Diesel',
        pictureUrl: 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg'
      },
      totalPageCount: 100,
      totalCarsCount: 1000,
      loading: false,
      isLoaded: true
    }
  }
};
describe('App', () => {
  const store = mockStore(mockState);
  const getWrapper = () => render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  afterEach(() => {
    jest.clearAllMocks();
  });
  test('fetches colors from an API and displays them', async () => {
    getWrapper();
    screen.debug();
  });
});
