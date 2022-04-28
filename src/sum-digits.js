const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let num;
  let str = String(n);
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result = result + +str[i];
  }
  console.log(String(result).length);
  if (String(result).length !== 1) {
    console.log(`no`);
    return getSumOfDigits(result);
  } else {
    num = result;
    console.log(num);
    return num;
  }
  // console.log(num);
  // return num;
}

module.exports = {
  getSumOfDigits,
};

// getSumOfDigits(91);
