/**
 * hasPairOfQuotes - Lets us know if there are at least two or more quotes in there
 *
 * @param {Object} vals The object that is returned from the incrementing quote counter
 *
 * @returns {Boolean} If there is one or more pairs of quotes
 */
const hasPairOfQuotes = (vals) => {
  if (vals.single >= 2 || vals.double >= 2) return true;
  if ((vals.single !== 0 && vals.single % 2 === 0) ||
      (vals.double !== 0 && vals.double % 2 === 0)) {
    return true;
  }
  return false;
};

module.exports = hasPairOfQuotes;
