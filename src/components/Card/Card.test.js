import React from 'react';
import Card from './Card';
import { render, wrappedComponent } from '../../helpers/test-utils';

describe('Card', () => {
  test('renders the Card', async () => {
    const mockProps = {
      car: {
        stockNumber: 1, pictureUrl: 'a', modelName: 'aa', fuelType: 'aa', mileage: { number: 111 }, color: 'aa'
      }
    };
    const [comp] = wrappedComponent(<Card { ...mockProps }/>);
    render(comp);
  });
});
