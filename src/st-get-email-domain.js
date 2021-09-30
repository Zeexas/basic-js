import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  if (email.split('').filter(x => x === '@').length > 1) {
    getEmailDomain(email.slice(email.indexOf('@') + 1));
  } else {
    return email.slice(email.indexOf('@') + 1);
  }
}
