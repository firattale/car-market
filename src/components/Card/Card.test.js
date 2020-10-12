import React from 'react';
import Card from './Card';
import { render } from '../../helpers/test-utils';

describe('Card', () => {
  test('renders the Card', async () => {
    const mockProps = {
      car: {
        stockNumber: 1, pictureUrl: 'a', modelName: 'aa', fuelType: 'aa', mileage: { number: 111 }, color: 'aa'
      }
    };
    render(<Card { ...mockProps } />);
  });
});
