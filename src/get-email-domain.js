const { NotImplementedError } = require("../extensions/index.js");

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
function getEmailDomain(email) {
  let arr = email.split(``).reverse();
  let final = [];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== `@`) {
      final.push(arr[i]);
    } else {
      break;
    }
  }
  let str = final.reverse().join(``);
  console.log(str);
  return str;
}

module.exports = {
  getEmailDomain,
};

// getEmailDomain("very.unusual.@.unusual.com@usual.com");
