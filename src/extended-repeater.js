const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let finalStr = ``;
  str = String(str);
  let arrAddSection = ``;
  let separator = ``;
  let addition = ``;
  let additionRepeatTimes = 0;
  let additionSeparator = ``;
  if (options.separator) {
    separator = options.separator;
  } else {
    separator = `+`;
  }
  if (options.addition || typeof options.addition === "boolean" || typeof options.addition === "object") {
    addition = String(options.addition);
    console.log(addition);
  }
  if (options.additionRepeatTimes) {
    additionRepeatTimes = options.additionRepeatTimes;
  } else {
    additionRepeatTimes = 1;
  }
  if (options.additionSeparator) {
    additionSeparator = options.additionSeparator;
    console.log(additionSeparator);
  } else {
    additionSeparator = `|`;
  }
  if (addition) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      arrAddSection += addition;
      i !== additionRepeatTimes - 1 ? (arrAddSection += additionSeparator) : 0;
      console.log(arrAddSection);
    }
  }
  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      finalStr += str + arrAddSection;
      console.log(finalStr);
      i !== options.repeatTimes - 1 ? (finalStr += separator) : 0;
    }
  } else {
    finalStr = str + arrAddSection;
  }
  console.log(finalStr);
  return finalStr;
}

module.exports = {
  repeater,
};
