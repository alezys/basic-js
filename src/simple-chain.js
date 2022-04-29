const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  str: ``,
  getLength() {
    console.log(this.arr.length);
    return this.arr.length;
  },
  addLink(num) {
    this.num = num;
    this.arr.push(`( ${this.num} )`);
    console.log(this.arr);
    return this;
  },
  removeLink(pos) {
    this.pos = pos;
    if (typeof this.pos === `string` || this.pos <= 0 || this.pos > this.arr.length) {
      this.arr = [];
      throw new Error(`You can't remove incorrect link!`);
    } else {
      this.arr.splice(this.pos - 1, 1);
      console.log(this.arr);
      return this;
    }
  },
  reverseChain() {
    this.arr.reverse();
    console.log(this.arr);
    return this;
  },
  finishChain() {
    for (let i = 0; i < this.arr.length; i++) {
      i !== this.arr.length - 1 ? (this.arr[i] = this.arr[i] + `~~`) : 0;
    }
    console.log(this.arr);
    this.str = this.arr.join(``);
    console.log(this.str);
    this.arr = [];
    return this.str;
  },
};

module.exports = {
  chainMaker,
};

// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(2).reverseChain().finishChain();
// chainMaker
//   .addLink(function () {})
//   .addLink("2nd")
//   .addLink("3rd")
//   .removeLink(2)
//   .reverseChain()
//   .finishChain();

// chainMaker.addLink(1).addLink(2).addLink(3).removeLink("2nd");

// chainMaker.addLink("GHI").addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink("GHI").finishChain();
