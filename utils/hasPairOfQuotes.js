//  Expects quoteValues from checkQuotes
//  ie: {
  //  single: #,
  //  double: #
// }
const hasPairOfQuotes = (vals) => {
  if (vals.single >= 2 || vals.double >= 2) return true;
  if ((vals.single !== 0 && vals.single % 2 === 0) ||
      (vals.double !== 0 && vals.double % 2 === 0)) {
    return true;
  }
  return false;
};

module.exports = hasPairOfQuotes;
