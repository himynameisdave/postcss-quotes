import test from 'ava';// eslint-disable-line
const { readFileSync } = require('fs');
const { resolve } = require('path');
const postcss = require('postcss');
const plugin = require('../');
const tests = require('./helpers/tests.js');


//  Processes the CSS
const doPostcss = (quotes) => (actual) => postcss(plugin({ quotes })).process(actual);
//  Actually compares the css
const doCompare = (quotes) => (t, fixturePath) => ({ css }) => {
  const expected = readFileSync(`./test/${fixturePath}.expected_${quotes}.css`, 'utf-8');
  t.is(css, expected);
};
//  Run a test
const doTest = (quote, actual) => (t, fixturePath) => doPostcss(quote)(actual).then(doCompare(quote)(t, fixturePath));

tests.map(v => { // eslint-disable-line array-callback-return
  const actual = readFileSync(resolve(__dirname, `${v.fixturePath}.actual.css`), 'utf-8');
  //  Test single
  const single = doTest('single', actual);
  test(`${v.message} => 'single'`, t => single(t, v.fixturePath));
  //  Test double
  const double = doTest('double', actual);
  test(`${v.message} => 'double'`, t => double(t, v.fixturePath));
});
