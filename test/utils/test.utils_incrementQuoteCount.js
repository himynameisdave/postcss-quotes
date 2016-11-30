import test from 'ava';
const _incrementQuoteCount = require('../../utils/incrementQuoteCount.js');
//  Generates the test object for you
const obj = (single, double) => ({ single, double });


/* eslint-disable no-undef */
test('increments \'single\' by 1', t => {
  const actual = _incrementQuoteCount('single', obj(0, 0));
  const expected = obj(1, 0);
  t.deepEqual(actual, expected);
});

test('increments \'double\' by 1', t => {
  const actual = _incrementQuoteCount('double', obj(2, 2));
  const expected = obj(2, 3);
  t.deepEqual(actual, expected);
});
/* eslint-enable */
