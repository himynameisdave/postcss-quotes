const fs = require('fs');
const postcss = require('postcss');
const plugin = require('../');
const fixturesBase = './test/fixtures/fixtures.';

const test = (inputFile, opts) => new Promise((res, rej) => {
  fs.readFile(`${fixturesBase}${inputFile}`, 'utf-8', (e, data) => {
    if (e) return rej(e);

    return postcss([plugin(opts)])
      .process(data)
      .then(outputCss => res(outputCss))
      .catch(err => rej(err));
  });
});

module.exports = test;


// describe('postcss-quotes', function () {
//
//     /* Write tests here
//
//     it('does something', function (done) {
//         test('a{ }', 'a{ }', { }, done);
//     });*/
//
// });
