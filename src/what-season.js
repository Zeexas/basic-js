import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason(date) {
  const checkDate = new Date(date);
  const month = checkDate.getMonth();
  
  if (date === '') {
    return 'Unable to determine the time of year!';
  } else if (!(checkDate instanceof Date)) {
    return 'Invalid date!'
  } else {
    if (month === 0 || month === 1 || month === 11) {
      return 'winter';
    } else if (month > 1 && month < 4) {
      return 'spring';
    } else if (month > 4 && month < 7) {
      return 'summer';
    } else {
      return 'autumn (fall)';
    }
  }
}
