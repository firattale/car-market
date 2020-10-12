import { capitalize } from './helpers';

it('should capitalize first letter', () => {
  const str = 'str';
  expect(capitalize(str)).toBe('Str');
});
