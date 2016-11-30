const postcss = require('postcss');
// const escapeQuotes = require('escape-quotes');
const incrementQuoteCount = require('./utils/incrementQuoteCount.js');
const hasPairOfQuotes = require('./utils/hasPairOfQuotes.js');

const checkQuotes = (str) => str.split('').reduce((acc, character) => {
  if (character === '\'') {
    acc = incrementQuoteCount('single', acc);
  }
  if (character === '"') {
    acc = incrementQuoteCount('double', acc);
  }
  return acc;
}, { // Initial values for the reducer
  single: 0,
  double: 0
});

//  TODO: fill this in
// const handleManyQuote = (str) => str;

module.exports = postcss.plugin('postcss-quotes', (opts) => {
  //  Default to single-style quotes
  const quoteType = opts && opts.quotes ? opts.quotes : 'single';

  return (css) => {
    css.walkRules(rule => {
      rule.walkDecls((decl) => {
        //  Our cleaned declaration value, kept separate in case we need to compare with OG
        let cleanDecl = decl.value;
        const quoteValues = checkQuotes(cleanDecl);
        if (hasPairOfQuotes(quoteValues)) {
          if (quoteType === 'single' && quoteValues.double === 2) {
            cleanDecl = cleanDecl.replace(/"/g, '\'');
            // cleanDecl = escapeQuotes(cleanDecl);
          }
          if (quoteType === 'double' && quoteValues.single === 2) {
            cleanDecl = cleanDecl.replace(/'/g, '"');
            // cleanDecl = escapeQuotes(cleanDecl, '"', '\\');
          }
          //  Breaking off logic to handle many-quote strings, for the time being
          // if (quoteValues.single > 2 || quoteValues.double > 2) {
          //   cleanDecl = handleManyQuote(cleanDecl);
          // }
        }
        decl.value = cleanDecl;
      });
    });

    //  Handle charset quotes
    /*
    var metCharset = false;
    css.walkAtRules("charset", function (atRule) {
      if (!metCharset) {
        metCharset = true;
        atRule.parent.prepend(atRule.clone());
      }

      atRule.remove();
    });
    */
  };
});
