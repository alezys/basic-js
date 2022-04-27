const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (Array.isArray(arr)) {
    let team = ``;
    let arrNew = [];
    for (let i = 0; i < arr.length; i++) {
      let temp = ``;
      if (typeof arr[i] === `string`) {
        temp = arr[i].trim().toUpperCase();
        arrNew.push(temp[0]);
      }
    }
    arrNew.sort();
    team = arrNew.join(``);
    return team;
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam,
};
