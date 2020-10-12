import React from 'react';
import Details from './Details';
import { render } from '../../helpers/test-utils';

describe('Details', () => {
  test('renders the Details', async () => {
    render(<Details/>);
  });
});
