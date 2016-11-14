const postcss = require('postcss');
const expect = require('chai').expect; // eslint-disable no-extraneous-dependencies

const plugin = require('../');

const test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

describe('postcss-quotes', function () {

    /* Write tests here

    it('does something', function (done) {
        test('a{ }', 'a{ }', { }, done);
    });*/

});
