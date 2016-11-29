const { deepEqual } = require('chai').assert;
const _incrementQuoteCount = require('../../utils/incrementQuoteCount.js');
//  Generates the test object for you
const t = (single, double) => ({ single, double });


/* eslint-disable no-undef */
describe('utils/incrementQuoteCount', () => {
  it('increments \'single\' by 1', () => {
    const actual = _incrementQuoteCount('single', t(0, 0));
    const expected = t(1, 0);
    deepEqual(actual, expected);
  });
  it('increments \'double\' by 1', () => {
    const actual = _incrementQuoteCount('double', t(2, 2));
    const expected = t(2, 3);
    deepEqual(actual, expected);
  });
});
/* eslint-enable */
