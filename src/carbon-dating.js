const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(num) {
  if (typeof num === `string` && arguments.length !== 0 && parseFloat(num) > 0 && parseFloat(num) <= 15.0) {
    num = parseFloat(num);
    num = num.toFixed(10);
    let t = 0.693 / HALF_LIFE_PERIOD;
    t = t.toFixed(10);
    let mathLog = Math.log(MODERN_ACTIVITY / num);
    mathLog = mathLog.toFixed(10);
    let time = (mathLog / t).toFixed(10);
    time = Math.ceil(time);
    return time;
  } else {
    return false;
  }
}

module.exports = {
  dateSample,
};
