/**
 * incrementQuoteCount - When we're counting the # of quotes, this is used a reducer function
 *
 * @param {String} type key to update
 * @param {Object} acc  Accumulator, {single: Number, double: Number}
 *
 * @returns {Object} Updated object with counts of # of strings
 */
const incrementQuoteCount = (type, acc) => Object.assign({}, acc, { [type]: acc[type] + 1 });
module.exports = incrementQuoteCount;
