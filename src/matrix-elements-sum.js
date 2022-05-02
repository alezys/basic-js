const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let count = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    console.log(matrix[0]);
    console.log(`check`);
    for (let j = 0; j < matrix.length; j++) {
      // console.log(matrix.length);
      console.log(matrix[j][i]);
      if (matrix[j][i] !== 0) {
        count += matrix[j][i];
      } else {
        break;
      }
    }
  }
  console.log(count);
  return count;
}

module.exports = {
  getMatrixElementsSum,
};

// let arr = [
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ];

// getMatrixElementsSum(arr);
