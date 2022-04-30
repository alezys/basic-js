const { NotImplementedError } = require("../extensions/index.js");

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
function getCommonCharacterCount(s1, s2) {
  let arrOne = s1.split(``);
  let arrTwo = s2.split(``);
  let count = 0;
  function repeat(arrOne, arrTwo) {
    for (let i = 0; i < 1; i++) {
      for (let j = 0; j < arrTwo.length; j++) {
        if (arrOne[i] === arrTwo[j]) {
          console.log(arrOne[i], arrTwo[j]);
          count++;
          console.log(count);
          console.log(arrOne);
          console.log(arrTwo);
          arrOne.splice(i, 1);
          arrTwo.splice(j, 1);
          console.log(arrOne);
          console.log(arrTwo);
          break;
        }
        j === arrTwo.length - 1 ? arrOne.splice(i, 1) : 0;
      }
      break;
    }
    console.log(`repeat`);
    if (arrOne.length && arrTwo.length) {
      return repeat(arrOne, arrTwo);
    }
  }
  repeat(arrOne, arrTwo);
  console.log(count);
  return count;
}

module.exports = {
  getCommonCharacterCount,
};

// getCommonCharacterCount("aabcc", "adcaa");
// getCommonCharacterCount("zzzz", "zzzzzzz");
// getCommonCharacterCount("abca", "xyzbac");
// getCommonCharacterCount("", "abc");
// getCommonCharacterCount("a", "b");
