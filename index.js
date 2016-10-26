var postcss = require('postcss');

module.exports = postcss.plugin('postcss-quotes', function (opts) {
    opts = opts || {};

    // Work with options here

    return function (css) {

        // Transform CSS AST here

    };
});
