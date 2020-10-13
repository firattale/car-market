import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Skeleton from './SkeletonCard';
import React from 'react';

it('should show the content of skeletoncard', () => {
  render(<Skeleton />);
});
