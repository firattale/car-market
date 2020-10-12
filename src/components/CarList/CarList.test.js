import React from 'react';
import Carlist from './Carlist';
import { screen } from '@testing-library/react';
import { render } from '../../helpers/test-utils';

describe('Carlist', () => {
  test('renders the Home Page', async () => {
    render(<Carlist/>);
  });
});
