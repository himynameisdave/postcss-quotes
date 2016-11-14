/* eslint-disable */
const expect = require('chai').expect;
const _hasPairOfQuotes = require('../utils/hasPairOfQuotes.js')
/* eslint-enable */

/* eslint-disable no-undef */
describe('utils/hasPairOfQuotes', () => {
  it('returns false if both `single` and `double` === 0', done => {
    expect(_hasPairOfQuotes({
      single: 0,
      double: 0
    })).to.eql(false);
    done();
  });
  it('returns false if both `single` and `double` === 1', done => {
    expect(_hasPairOfQuotes({
      single: 1,
      double: 1
    })).to.eql(false);
    done();
  });
  it('returns true if both `single` = 1 and `double` = 3', done => {
    expect(_hasPairOfQuotes({
      single: 1,
      double: 3
    })).to.eql(true);
    done();
  });
  it('returns true if both `single` and `double` === 2', done => {
    expect(_hasPairOfQuotes({
      single: 2,
      double: 2
    })).to.eql(true);
    done();
  });
  it('returns true if both `single` = 4 and `double` = 0', done => {
    expect(_hasPairOfQuotes({
      single: 4,
      double: 0
    })).to.eql(true);
    done();
  });
  it('returns true if either `single` or `double` >= 2', done => {
    expect(_hasPairOfQuotes({
      single: 3,
      double: 0
    })).to.eql(true);
    done();
  });
});
/* eslint-enable */
