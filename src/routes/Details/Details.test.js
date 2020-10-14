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
  carDetail: {
    color: 'blue',
    fuelType: 'Diesel',
    manufacturerName: 'Skoda',
    mileage: { number: 147387, unit: 'km' },
    modelName: 'Yeti',
    pictureUrl: 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg',
    stockNumber: 10044
  },
  currentPage: 1,
  manufacturer: null,
  sorting: null,
  color: null,
  error: null
};
describe('Details', () => {
  test('renders the Details and change the button after clicking', () => {
    const [comp] = wrappedComponent(<Details/>, mockState);
    render(comp);
    screen.getByText('Yeti');
    screen.getByText(/10044 - 147387 KM - Diesel - Blue/);
    screen.getByText('If you like this car, click the button and save it in your collection of favourite items.');
    screen.getByText('This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions.');
    const saveButton = screen.getByTestId('save-button');
    saveButton.click();
    screen.getByText('UnSave');
    saveButton.click();
    screen.getByText('Save');
  });
});
