const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  console.log(Object.prototype.toString.call(date));
  console.log(date);
  if (arguments.length === 0) {
    return `Unable to determine the time of year!`;
  } else if (Object.prototype.toString.call(date) !== "[object Date]" || typeof date.getMonth !== "function" || typeof date !== `object`) {
    console.log(`error1`);
    throw new Error("Invalid date!");
  } else if (typeof date.getMonth() !== `number`) {
    console.log(`error2`);
    throw new Error("Invalid date!");
  } else if (typeof date === `object` || typeof date.getMonth === "function" || Object.prototype.toString.call(date) === "[object Date]") {
    if (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1) {
      console.log(`1`);
      console.log(Object.prototype.toString.call(date));
      return `winter`;
    } else if (date.getMonth() === 2 || date.getMonth() === 3 || date.getMonth() === 4) {
      return `spring`;
    } else if (date.getMonth() === 5 || date.getMonth() === 6 || date.getMonth() === 7) {
      return `summer`;
    } else if (date.getMonth() === 8 || date.getMonth() === 9 || date.getMonth() === 10) {
      return `autumn`;
    }
  } else if (Object.prototype.toString.call(date) === "[object Date]" && date.getFullYear() < 1970) {
    console.log(`2`);
    if (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1) {
      return `winter`;
    } else if (date.getMonth() === 2 || date.getMonth() === 3 || date.getMonth() === 4) {
      return `spring`;
    } else if (date.getMonth() === 5 || date.getMonth() === 6 || date.getMonth() === 7) {
      return `summer`;
    } else if (date.getMonth() === 8 || date.getMonth() === 9 || date.getMonth() === 10) {
      return `autumn`;
    }
  }
}

const fakeDate = {
  toString() {
    return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: "Date",
};

const deeperFakeDate = {
  toString() {
    return Date.prototype.toString.call(new Date());
  },
  getMonth() {
    return Date.prototype.getMonth.call(new Date());
  },
  getFullYear() {
    return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
  },
  getDate() {
    return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
  },
  getHours() {
    return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
  },
  getMinutes() {
    return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
  },
  getSeconds() {
    return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
  },
  getMilliseconds() {
    return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
  },
  getDay() {
    return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
  },
  [Symbol.toStringTag]: "Date",
};

Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

// getSeason(() => new Date());
// getSeason({ John: "Smith" });
// getSeason(new Date(1664, 1, 17, 13, 41, 10, 345));
// getSeason(new Date(2019, 11, 22, 23, 45, 11, 500));
// getSeason(new Date(1664, 1, 17, 13, 41, 10, 345));
// getSeason(new Date(1664, 1, 17, 13, 41, 10, 345));
// getSeason(fakeDate);
getSeason(deeperFakeDate);

module.exports = {
  getSeason,
};
