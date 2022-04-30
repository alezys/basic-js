const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    let newArr = [...arr];
    let arrObj = [];
    function repeat(arrR) {
      for (let i = 0; i < arrR.length; i++) {
        console.log(`repeat`);
        console.log(`this is ${arrR[i]}`);
        if (arrR[i] !== `--discard-next` && arrR[i] !== `--discard-prev` && arrR[i] !== `--double-next` && arrR[i] !== `--double-prev`) {
          console.log(`push`);
          arrObj.push(arrR[i]);
          arrR.splice(i, 1);
          console.log(arrObj);
          console.log(arrR);
          break;
        } else if (arrR[i] === `--discard-next`) {
          console.log(`discard-next`);
          if (arrR[i + 2] === `--double-prev` || arrR[i + 2] === `--discard-prev`) {
            arrR.splice(i, 1);
            arrR.splice(i, 1);
            arrR.splice(i, 1);
            console.log(arrObj);
            console.log(arrR);
            break;
          } else {
            arrR.splice(i, 1);
            arrR.splice(i, 1);
            console.log(arrObj);
            console.log(arrR);
            break;
          }
        } else if (arrR[i] === `--discard-prev`) {
          console.log(`discard-prev`);
          arrObj.splice(arrObj.length - 1, 1);
          arrR.splice(i, 1);
          console.log(arrObj);
          console.log(arrR);
          break;
        } else if (arrR[i] === `--double-next`) {
          if (arrR[i + 1]) {
            console.log(`double-next`);
            arrR.splice(i, 1);
            arrR.splice(i, 0, arrR[i]);
            console.log(arrR);
            break;
          } else {
            arrR.splice(i, 1);
            break;
          }
        } else if (arrR[i] === `--double-prev`) {
          console.log(`double-prev`);
          if (arrObj[arrObj.length - 1]) {
            console.log(arrObj[arrObj.length - 1]);
            arrObj.splice(arrObj.length - 1, 0, arrObj[arrObj.length - 1]);
            arrR.splice(i, 1);
            console.log(arrObj);
            console.log(arrR);
            break;
          } else {
            arrR.splice(i, 1);
            break;
          }
        }
      }
      if (arrR.length !== 0) {
        return repeat(arrR);
      }
    }
    repeat(newArr);
    arr = [...arrObj];
    console.log(newArr);
    console.log(arrObj);
    console.log(arr);
    return arr;
  } else {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
}

module.exports = {
  transform,
};

// transform(["--discard-prev", 1, 2, 3]);
// transform(["--double-prev", 1, 2, 3]);
// transform([1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5]);
// transform([1, 2, 3, "--double-next", 1337, "--double-prev", 4, 5]);
// transform([1, 2, 3, "--discard-next", 1337, "--discard-prev", 4, 5]);
// transform([1, 2, 3, "--double-next", 1337, "--discard-prev", 4, 5]);
// transform(["--discard-prev", 1, 2, 3]);
// transform(["--discard-prev", 1, 2, 3]);
