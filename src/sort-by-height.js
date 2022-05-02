const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 * [150, 160, 170, 180, 190]
 */
function sortByHeight(arr) {
  let arrNew = [];
  let arrFinal = [];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arrNew.push(arr[i]);
    }
  }
  console.log(arrNew);
  arrNew.sort(function (a, b) {
    return a - b;
  });
  console.log(arrNew);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arrFinal.push(-1);
    } else {
      arrFinal.push(arrNew[0]);
      arrNew.shift();
    }
  }
  console.log(arrFinal);
  return arrFinal;
}

module.exports = {
  sortByHeight,
};

// arr = [-1, 150, 190, 170, -1, -1, 160, 180];
// sortByHeight(arr);
