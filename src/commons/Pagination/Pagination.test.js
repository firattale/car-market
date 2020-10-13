import React from 'react';
import Pagination from './Pagination';
import { render, screen } from '../../helpers/test-utils';
import axios from 'axios';
jest.mock('axios');

describe('Pagination', () => {
  test('renders the Pagination', async () => {
    render(<Pagination/>);
  });
  it('should show Page 2 after clicking next', () => {
    render(<Pagination/>);
    const button = screen.getByTestId('next-button');
    button.click();
    expect(screen.getByText(/Page 2/)).toBeInTheDocument();
  });
  it('should show Page 100 after clicking last', () => {
    render(<Pagination/>);
    const button = screen.getByTestId('last-button');
    button.click();
    expect(screen.getByText(/Page 100/)).toBeInTheDocument();
  });
  it('should not allow to click first on the first page', () => {
    render(<Pagination/>);
    const button = screen.getByTestId('first-button');
    button.click();
    expect(screen.getByText(/Page 1/)).toBeInTheDocument();
  });
  it('should not allow to click previous on the first page', () => {
    render(<Pagination/>);
    const button = screen.getByTestId('previous-button');
    button.click();
    expect(screen.getByText(/Page 1/)).toBeInTheDocument();
  });
});
