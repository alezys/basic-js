const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]   [false, false, false],
 * ]   [false, false, false],
 */
function minesweeper(matrix) {
  let arr = [];
  if (matrix.length === matrix[0].length) {
    console.log(`square`);
    for (let i = 0; i < matrix.length; i++) {
      arr.push([]);
      for (let j = 0; j < matrix.length; j++) {
        arr[i].push(``);
      }
    }
    console.log(arr);
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (i === 0 && j === 0) {
          console.log(`1`);

          matrix[i][j + 1] ? count++ : 0;
          matrix[i + 1][j] ? count++ : 0;
          matrix[i + 1][j + 1] ? count++ : 0;
          arr[i][j] = count;
        }
        if (i === 0 && j !== matrix[i].length - 1 && j !== 0) {
          console.log(`2`);

          matrix[i][j - 1] ? count++ : 0;
          matrix[i][j + 1] ? count++ : 0;
          matrix[i + 1][j - 1] ? count++ : 0;
          matrix[i + 1][j] ? count++ : 0;
          matrix[i + 1][j + 1] ? count++ : 0;
          arr[i][j] = count;
        }
        if (i === 0 && j === matrix[i].length - 1) {
          console.log(`3`);

          matrix[i][j - 1] ? count++ : 0;
          matrix[i + 1][j - 1] ? count++ : 0;
          matrix[i + 1][j] ? count++ : 0;
          arr[i][j] = count;
        }
        if (i !== 0 && j === 0 && i !== matrix.length - 1) {
          console.log(`4`);

          matrix[i - 1][j] ? count++ : 0;
          matrix[i - 1][j + 1] ? count++ : 0;
          matrix[i][j + 1] ? count++ : 0;
          matrix[i + 1][j] ? count++ : 0;
          matrix[i + 1][j + 1] ? count++ : 0;
          arr[i][j] = count;
        }
        if (i !== 0 && j !== matrix[i].length - 1 && i !== matrix.length - 1 && j !== 0) {
          console.log(`5`);

          matrix[i - 1][j - 1] ? count++ : 0;
          matrix[i - 1][j] ? count++ : 0;
          matrix[i - 1][j + 1] ? count++ : 0;
          matrix[i][j - 1] ? count++ : 0;
          matrix[i][j + 1] ? count++ : 0;
          matrix[i + 1][j - 1] ? count++ : 0;
          matrix[i + 1][j] ? count++ : 0;
          matrix[i + 1][j + 1] ? count++ : 0;
          arr[i][j] = count;
        }
        if (i !== 0 && i !== matrix.length - 1 && j === matrix[i].length - 1) {
          console.log(`6`);

          matrix[i - 1][j - 1] ? count++ : 0;
          matrix[i - 1][j] ? count++ : 0;
          matrix[i][j - 1] ? count++ : 0;
          matrix[i + 1][j - 1] ? count++ : 0;
          matrix[i + 1][j] ? count++ : 0;
          arr[i][j] = count;
        }
        if (i === matrix.length - 1 && j === 0) {
          console.log(`7`);

          matrix[i - 1][j] ? count++ : 0;
          matrix[i - 1][j + 1] ? count++ : 0;
          matrix[i][j + 1] ? count++ : 0;
          arr[i][j] = count;
        }
        if (j !== matrix[i].length - 1 && j !== 0 && i === matrix.length - 1) {
          console.log(`8`);

          matrix[i][j - 1] ? count++ : 0;
          matrix[i][j + 1] ? count++ : 0;
          matrix[i - 1][j - 1] ? count++ : 0;
          matrix[i - 1][j] ? count++ : 0;
          matrix[i - 1][j + 1] ? count++ : 0;
          arr[i][j] = count;
        }
        if (i === matrix.length - 1 && j === matrix[i].length - 1) {
          console.log(`9`);

          matrix[i][j - 1] ? count++ : 0;
          matrix[i - 1][j - 1] ? count++ : 0;
          matrix[i - 1][j] ? count++ : 0;
          arr[i][j] = count;
        }
        count = 0;
      }
    }
  }
  if (matrix.length !== matrix[0].length) {
    console.log(`not square`);
    for (let i = 0; i < matrix.length; i++) {
      arr.push([]);
      for (let j = 0; j < matrix[i].length; j++) {
        arr[i].push(``);
      }
    }
    console.log(arr);
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (i === 0 && j === 0) {
          console.log(`1`);

          matrix[i][j + 1] ? count++ : 0;
          matrix[i + 1][j] ? count++ : 0;
          matrix[i + 1][j + 1] ? count++ : 0;
          arr[i][j] = count;
        }
        if (i === 0 && j !== matrix[i].length - 1 && j !== 0) {
          console.log(`2`);

          matrix[i][j - 1] ? count++ : 0;
          matrix[i][j + 1] ? count++ : 0;
          matrix[i + 1][j - 1] ? count++ : 0;
          matrix[i + 1][j] ? count++ : 0;
          matrix[i + 1][j + 1] ? count++ : 0;
          arr[i][j] = count;
        }
        if (i === 0 && j === matrix[i].length - 1) {
          console.log(`3`);

          matrix[i][j - 1] ? count++ : 0;
          matrix[i + 1][j - 1] ? count++ : 0;
          matrix[i + 1][j] ? count++ : 0;
          arr[i][j] = count;
        }
        if (i !== 0 && j === 0 && i !== matrix.length - 1) {
          console.log(`4`);

          matrix[i - 1][j] ? count++ : 0;
          matrix[i - 1][j + 1] ? count++ : 0;
          matrix[i][j + 1] ? count++ : 0;
          matrix[i + 1][j] ? count++ : 0;
          matrix[i + 1][j + 1] ? count++ : 0;
          arr[i][j] = count;
        }
        if (i !== 0 && j !== matrix[i].length - 1 && i !== matrix.length - 1 && j !== 0) {
          console.log(`5`);

          matrix[i - 1][j - 1] ? count++ : 0;
          matrix[i - 1][j] ? count++ : 0;
          matrix[i - 1][j + 1] ? count++ : 0;
          matrix[i][j - 1] ? count++ : 0;
          matrix[i][j + 1] ? count++ : 0;
          matrix[i + 1][j - 1] ? count++ : 0;
          matrix[i + 1][j] ? count++ : 0;
          matrix[i + 1][j + 1] ? count++ : 0;
          arr[i][j] = count;
        }
        if (i !== 0 && i !== matrix.length - 1 && j === matrix[i].length - 1) {
          console.log(`6`);

          matrix[i - 1][j - 1] ? count++ : 0;
          matrix[i - 1][j] ? count++ : 0;
          matrix[i][j - 1] ? count++ : 0;
          matrix[i + 1][j - 1] ? count++ : 0;
          matrix[i + 1][j] ? count++ : 0;
          arr[i][j] = count;
        }
        if (i === matrix.length - 1 && j === 0) {
          console.log(`7`);

          matrix[i - 1][j] ? count++ : 0;
          matrix[i - 1][j + 1] ? count++ : 0;
          matrix[i][j + 1] ? count++ : 0;
          arr[i][j] = count;
        }
        if (j !== matrix[i].length - 1 && j !== 0 && i === matrix.length - 1) {
          console.log(`8`);

          matrix[i][j - 1] ? count++ : 0;
          matrix[i][j + 1] ? count++ : 0;
          matrix[i - 1][j - 1] ? count++ : 0;
          matrix[i - 1][j] ? count++ : 0;
          matrix[i - 1][j + 1] ? count++ : 0;
          arr[i][j] = count;
        }
        if (i === matrix.length - 1 && j === matrix[i].length - 1) {
          console.log(`9`);

          matrix[i][j - 1] ? count++ : 0;
          matrix[i - 1][j - 1] ? count++ : 0;
          matrix[i - 1][j] ? count++ : 0;
          arr[i][j] = count;
        }
        count = 0;
      }
    }
  }
  console.log(arr);
  return arr;
}

module.exports = {
  minesweeper,
};

// let arrEx = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false],
// ];

// let arrEx = [
//   [false, false, false],
//   [false, false, false],
// ];

// minesweeper(arrEx);
