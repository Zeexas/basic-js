import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let names;
  if (Array.isArray(members)) {
    names = members.filter(function(n) {
      return typeof n === 'string';
    });
  } else {
    return false;
  }
  
  if (names.length === 0) {
    return false;
  } else {
    return names.map(n => n.toUpperCase().trim()[0]).sort().join('');
  }
}
