/**
 * parseOptions - Parses the postcss options that are passed in
 *
 * @param {Object || String} opts The options from Postcss
 *
 * @returns {String} 'single' || 'double'
 */
const parseOptions = (opts) => {
  if (typeof opts === 'string' && opts === 'double') {
    return 'double';
  }
  if (opts && opts.quotes && (opts.quotes === 'single' || opts.quotes === 'double')) {
    return opts.quotes;
  }
  return 'single';
};

module.exports = parseOptions;
