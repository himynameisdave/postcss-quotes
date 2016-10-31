const postcss = require('postcss');


//  Determine if a given string contains pair of matching quotes
const checkQuotes = (str) => {
  console.log(str);
  // TODO: ensure that there are a PAIR of quotes...
  //    ...otherwise `url("I'm a URL")` would pass as a 'single'
  if (str.indexOf('\'') > -1) {
    //  TODO: break off into own fn
    const singleQuoteCount = str.split().reduce((acc, item) => {
      if (item === '\'') {
        acc = acc + 1;
      }
      return acc;
    }, 0);
    console.log('The singleQuoteCount is: ' + singleQuoteCount);
    return 'single';
  }
  if (str.indexOf('\"') > -1) {
    const doubleQuoteCount = str.split().reduce((acc, item) => {
      if (item === '\"') {
        acc = acc + 1;
      }
      return acc;
    }, 0);
    console.log('The doubleQuoteCount is: ' + doubleQuoteCount);
    return 'double';
  }
  return false;
};



module.exports = postcss.plugin('postcss-quotes', (opts) => {
    //  Default to single-style quotes
    const quoteType = opts && opts.quotes ? opts.quotes : 'single';


    return (css) => {
      css.walkRules(rule => {
        rule.walkDecls((decl, i) => {
          //  Our cleaned declaration value
          let cleanDecl = decl.value;
          const hasQuotes = checkQuotes(cleanDecl);
          //  If there are quotes, lets run our
          // if (hasQuotes) {
          //   if (quoteType === hasQuotes) {
          //     return
          //   }
          // }
          //  If there are no quotes, just return the decl.value
          return cleanDecl;
        });
      });
    };
});
