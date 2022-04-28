const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
// class DepthCalculator {
//   calculateDepth(/* arr */) {
//     throw new NotImplementedError("Not implemented");
//     // remove line with error and write your code here
//   }
// }

class DepthCalculator {
  constructor(arr) {
    this.array = arr;
    this.count = 1;
  }
  calculateDepth(arr = this.array, count = 1) {
    console.log(`this ${this.count}`);
    console.log(`common ${count}`);
    count > this.count ? (this.count = count) : 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "object") {
        this.calculateDepth(arr[i], count + 1);
        console.log(`contextMet`);
      }
    }
    console.log(this.count);
    return this.count;
  }
}

module.exports = {
  DepthCalculator,
};

// let zero = new DepthCalculator([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]);
// let zero = new DepthCalculator([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ["6575", ["adas", ["dfg", [0]]]]]);
// let zero = new DepthCalculator([
//   1,
//   [8, [[]]],
//   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]],
//   2,
//   3,
//   [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]],
//   [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]],
//   4,
//   5,
//   ["6575", ["adas", ["dfg", [0]]]],
// ]);

// zero.calculateDepth();

// DepthCalculator.calculateDepth([1, 2, 3, 4, 5, [1]]);
