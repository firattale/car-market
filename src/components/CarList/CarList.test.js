import React from 'react';
import Carlist from './Carlist';
import { render } from '../../helpers/test-utils';

describe('Carlist', () => {
  test('renders the Carlist', async () => {
    render(<Carlist/>);
  });
});
