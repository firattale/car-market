import React from 'react';
import Home from './Home';
import { wrappedComponent } from '../../helpers/test-utils';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

describe('Home', () => {
  const mockState = {
    colors: {
      data: ['red', 'blue'],
      isLoaded: true
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

  test('renders the Home Page', () => {
    const [comp] = wrappedComponent(<Home/>, mockState);
    render(comp);
  });
  test('renders colors options', () => {
    const [comp] = wrappedComponent(<Home/>, mockState);
    render(comp);
    const options = screen.getAllByTestId('select-color-option');
    expect(options.length).toBe(3);
  });
  test('renders manufacturer options', () => {
    const state = {
      ...mockState,
      ...{
        manufacturers: {
          data: [{ name: 'BMW' }, { name: 'Audi' }]
        }
      }
    };
    const [comp] = wrappedComponent(<Home/>, state);
    render(comp);
    const options = screen.getAllByTestId('select-manufacturer-option');
    expect(options.length).toBe(3);
  });
  test('renders sort options', () => {
    const [comp] = wrappedComponent(<Home/>);
    render(comp);
    const options = screen.getAllByTestId('select-sort-option');
    expect(options.length).toBe(3);
  });
  test('filter by colors', async () => {
    const state = {
      ...mockState,
      cars: {
        data: [{
          color: 'red',
          fuelType: 'Petrol',
          manufacturerName: 'Skoda',
          mileage: { number: 139631, unit: 'km' },
          modelName: 'Forman',
          pictureUrl: 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg',
          stockNumber: 11669
        }],
        totalPageCount: 9,
        totalCarsCount: 82,
        isLoaded: true
      }
    };
    const [comp] = wrappedComponent(<Home/>, state);

    render(comp);
    act(() => {
      userEvent.selectOptions(screen.getByTestId('select-color'), ['red']);
    });
    act(() => {
      userEvent.click(screen.getByTestId('form-button'));
    });
    screen.debug();
    screen.getByText(/Stock/);
    screen.getByText(/# 11669/);
    screen.getByText(/139631 KM - Petrol - red/);
    screen.getByText(/Showing 1 of 82 Results/);
  });
});
