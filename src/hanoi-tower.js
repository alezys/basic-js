const { NotImplementedError } = require("../extensions/index.js");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2 ** disksNumber - 1;
  let tPerSec = turnsSpeed / 3600;
  console.log(tPerSec);
  tPerSec = tPerSec.toFixed(15);
  console.log(tPerSec);
  let speed = turns / tPerSec;
  console.log(speed);
  speed = Math.floor(speed.toFixed(9));
  console.log(speed);
  return { turns: turns, seconds: speed };
}

module.exports = {
  calculateHanoi,
};

// calculateHanoi(38, 4594);
