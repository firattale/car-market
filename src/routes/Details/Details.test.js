import React from 'react';
import Details from './Details';
import { render, screen } from '../../helpers/test-utils';

describe('Details', () => {
  test('renders the Details', async () => {
    render(<Details/>);
    screen.debug();
  });
});
