import test from 'ava';// eslint-disable-line
const fs = require('fs');
const postcss = require('postcss');
const plugin = require('../');


const tests = [
  {
    message: '02-single-set',
    fixturePath: '02-single-set/fixtures.02-single-set'
  }, {
    message: '03-double-set',
    fixturePath: '03-double-set/fixtures.03-double-set'
  }, {
    message: '04-mixed',
    fixturePath: '04-mixed/fixtures.04-mixed'
  }
];

tests.map(v => { // eslint-disable-line array-callback-return
  const actual = fs.readFileSync(`./test/fixtures/${v.fixturePath}.actual.css`, 'utf-8');
  //  Do singles test
  test(`${v.message} => 'single'`, t => {
    return postcss(plugin({ quotes: 'single' })).process(actual).then(({ css }) => {
      const expected = fs.readFileSync(`./test/fixtures/${v.fixturePath}.expected_single.css`, 'utf-8');
      // console.log('HERES THE CSS: \n\n\n\n\n', css === expected)
      t.is(css, expected);
    });
  });
  //  Do doubles test
  test(`${v.message} => 'double'`, t => {
    return postcss(plugin({ quotes: 'double' })).process(actual).then(({ css }) => {
      const expected = fs.readFileSync(`./test/fixtures/${v.fixturePath}.expected_double.css`, 'utf-8');
      t.is(css, expected);
    });
  });
});
