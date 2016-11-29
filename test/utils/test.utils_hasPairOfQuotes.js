const { equal } = require('chai').assert;
const _hasPairOfQuotes = require('../../utils/hasPairOfQuotes.js');
//  Generates the test object for you
const t = (single, double) => ({ single, double });

/* eslint-disable no-undef */
describe('utils/hasPairOfQuotes', () => {
  it('returns false if both `single` and `double` === 0', () => {
    const actual = _hasPairOfQuotes(t(0, 0));
    const expected = false;
    equal(actual, expected);
  });
  it('returns false if both `single` and `double` === 1', () => {
    const actual = _hasPairOfQuotes(t(1, 1));
    const expected = false;
    equal(actual, expected);
  });
  it('returns true if both `single` = 1 and `double` = 3', () => {
    const actual = _hasPairOfQuotes(t(1, 3));
    const expected = true;
    equal(actual, expected);
  });
  it('returns true if both `single` and `double` === 2', () => {
    const actual = _hasPairOfQuotes(t(2, 2));
    const expected = true;
    equal(actual, expected);
  });
  it('returns true if both `single` = 4 and `double` = 0', () => {
    const actual = _hasPairOfQuotes(t(4, 0));
    const expected = true;
    equal(actual, expected);
  });
  it('returns true if either `single` or `double` >= 2', () => {
    const actual = _hasPairOfQuotes(t(3, 0));
    const expected = true;
    equal(actual, expected);
  });
});
/* eslint-enable */
