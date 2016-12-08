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


///TODO: remove the above

//  TODO: pull out and test
const parseOptions = (opts) => {
  if (opts && opts.quotes && (opts.quotes === 'single' || opts.quotes === 'double')) {
    return opts.quotes;
  }
  return 'single';
};


const hasSingleQuotes = (str) => str.includes('\'');
const hasDoubleQuotes = (str) => str.includes('"');
const replaceAll = (str, before, after) => str.split(before).join(after);

const handleCharset = (quoteType) => (atRule) => {
  const ruleString = atRule.toString();
  if (quoteType === 'single' && hasDoubleQuotes(ruleString)) {
    atRule.replaceWith(replaceAll(ruleString, '"', '\''));
  }
  if (quoteType === 'double' && hasSingleQuotes(ruleString)) {
    atRule.replaceWith(replaceAll(ruleString, '\'', '"'));
  }
};

module.exports = postcss.plugin('postcss-quotes', (opts) => {
  //  Default to single-style quotes
  const quoteType = parseOptions(opts);

  return (css) => {
    //  Handle @charset
    css.walkAtRules('charset', handleCharset(quoteType));

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
    return css;
  };
});
