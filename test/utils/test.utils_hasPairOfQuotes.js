import test from 'ava';
const _hasPairOfQuotes = require('../../utils/hasPairOfQuotes.js');
//  Generates the test object for you
const obj = (single, double) => ({ single, double });

/* eslint-disable no-undef */
const tests = [
  {
    message: 'utils/hasPairOfQuotes => returns false if both `single` and `double` === 0',
    actual: _hasPairOfQuotes(obj(0, 0)),
    expected: false
  }, {
    message: 'returns false if both `single` and `double` === 1',
    actual: _hasPairOfQuotes(obj(1, 1)),
    expected: false
  }, {
    message: 'returns true if both `single` = 1 and `double` = 3',
    actual: _hasPairOfQuotes(obj(1, 3)),
    expected: true
  }, {
    message: 'returns true if both `single` and `double` === 2',
    actual: _hasPairOfQuotes(obj(2, 2)),
    expected: true
  }, {
    message: 'returns true if both `single` = 4 and `double` = 0',
    actual: _hasPairOfQuotes(obj(4, 0)),
    expected: true
  }, {
    message: 'returns true if either `single` or `double` >= 2',
    actual: _hasPairOfQuotes(obj(3, 0)),
    expected: true
  }
];

tests.reduce((a, v) => test(v.message, t => {
  t.is(v.actual, v.expected);
}));
/* eslint-enable */
