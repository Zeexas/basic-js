import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 export default function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let cleanS1 = (Array.from(new Set(s1.split(''))));
  for (let i = 0; i < cleanS1.length; i++) {
    if (s1.split('').filter(x => x === cleanS1[i]).length <= s2.split('').filter(x => x === cleanS1[i]).length) {
      count += s1.split('').filter(x => x === cleanS1[i]).length;
    } else {
      count += s2.split('').filter(x => x === cleanS1[i]).length;
    }
  }
  return count;
}
