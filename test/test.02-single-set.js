const fs = require('fs');
const test = require('./test.js');
const { equal } = require('chai').assert;

/* eslint-disable no-undef */
describe('02-single-set', () => {
  describe('when using `single` option', () => {
  //   it('quotes remain intact', () => {
      const expected = fs.readFileSync('./test/fixtures/fixtures.02-single-set.css', 'utf-8');
      test('02-single-set.css', { quotes: 'single' })
        .then(actual => {
          // equal(expected, actual);
          console.log(expected)
        })
        .catch(e => console.warn(e));
    // });
  });


  // describe('when using `double` option', () => {
  //   it('quotes change to double', () => {
  //     test('02-single-set.css', { quotes: 'single' })
  //       .then(actual => {
  //
  //       })
  //       .catch(e => console.warn(e));
  //   });
  // });
});
/* eslint-enable */
