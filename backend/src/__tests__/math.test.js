const { add } = require('../math');

describe('add()', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('throws when arguments are not numbers', () => {
    expect(() => add('a', 1)).toThrow('Invalid arguments');
  });
});
