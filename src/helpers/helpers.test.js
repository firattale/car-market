import { capitalize } from './helpers';

it('should capitalize first letter', () => {
  const str = 'str';
  expect(capitalize(str)).toBe('Str');
});
it('should return "" if it is not string', () => {
  const str = 4;
  expect(capitalize(str)).toBe('');
});
