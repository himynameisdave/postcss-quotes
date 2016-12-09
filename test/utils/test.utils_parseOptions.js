import test from 'ava';
const _parseOptions = require('../../utils/parseOptions.js');


/* eslint-disable no-undef */
const tests = [
  {
    message: 'utils/parseOptions => returns `single` when { quotes: `single` }',
    actual: _parseOptions({ quotes: 'single' }),
    expected: 'single'
  }, {
    message: 'utils/parseOptions => returns `double` when { quotes: `double` }',
    actual: _parseOptions({ quotes: 'double' }),
    expected: 'double'
  }, {
    message: 'utils/parseOptions => returns `single` when quotes prop is spelled wrong',
    actual: _parseOptions({ quote: 'single' }),
    expected: 'single'
  }, {
    message: 'utils/parseOptions => returns `single` when neither single nor double is supplied',
    actual: _parseOptions({ quotes: 'who cares?' }),
    expected: 'single'
  }, {
    message: 'utils/parseOptions => returns `single` when no object is supplied',
    actual: _parseOptions('single'),
    expected: 'single'
  }
];

tests.reduce((a, v) => test(v.message, t => {
  t.is(v.actual, v.expected);
}));
/* eslint-enable */
