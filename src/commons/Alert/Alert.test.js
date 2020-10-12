import React from 'react';
import { render } from '@testing-library/react';
import Alert from './Alert';

it('renders correctly', () => {
  const tree = render(<Alert variant="danger" error="Something went wrong"></Alert>);

  expect(tree).toMatchSnapshot();
});
