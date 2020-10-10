import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';
import React from 'react';

it('should show the content of footer', () => {
  render(<Footer />);
  screen.getByText('© AUTO1 Group 2018');
});
