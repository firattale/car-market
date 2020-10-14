import React from 'react';
import Carlist from './Carlist';
import { render, wrappedComponent } from '../../helpers/test-utils';

describe('Carlist', () => {
  test('renders the Carlist', async () => {
    const [comp] = wrappedComponent(<Carlist/>);
    render(comp);
  });
});
