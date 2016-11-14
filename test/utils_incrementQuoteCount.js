/* eslint-disable */
const expect = require('chai').expect;
const _incrementQuoteCount = require('../utils/incrementQuoteCount.js')
/* eslint-enable */

/* eslint-disable no-undef */
describe('utils/incrementQuoteCount', () => {
  it('increments \'single\' by 1', done => {
    const testObj = { single: 0, double: 0 };
    expect(_incrementQuoteCount('single', testObj)).to.eql({
      single: 1,
      double: 0
    });
    done();
  });
  it('increments \'double\' by 1', done => {
    const testObj = { single: 2, double: 2 };
    expect(_incrementQuoteCount('double', testObj)).to.eql({
      single: 2,
      double: 3
    });
    done();
  });
});
/* eslint-enable */
