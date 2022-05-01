const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  let err = new Error('Invalid date!');
  if (!date.getTime) throw err;
  try {
    let fakeDate = date.getTime();
  } catch (err) {
    throw new Error('Invalid date!');
  }
  let currentMonth = date.getMonth();
  if (currentMonth === 0 || currentMonth === 1 || currentMonth === 11) return 'winter';
  if (currentMonth >= 2 && currentMonth <= 4) return 'spring';
  if (currentMonth >= 5 && currentMonth <= 7) return 'summer';
  if (currentMonth >= 8 && currentMonth <= 10) return 'autumn';
}

module.exports = {
  getSeason
};
