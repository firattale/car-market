import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './';
import React from 'react';

test('renders a message', () => {
  const { container, getByText } = render(<Header />);
  expect(getByText('Sell')).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <nav></nav>
  `);
});
