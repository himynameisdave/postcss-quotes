//  Simple method to increment the accumulator[type]
const incrementQuoteCount = (type, acc) => Object.assign({}, acc, { [type]: acc[type] + 1 });
module.exports = incrementQuoteCount;
