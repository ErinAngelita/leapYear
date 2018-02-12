var assert = require('chai').assert;
var leapYear = require('./leapYear');

describe("leapYear", () => {
  it("returns 2003 as not a leap year", () => {
    // arrange
    // act
    var isLeap = leapYear(2003);
    // assert
    assert(!isLeap);
  });
  it("returns 2004 as a leap year", () => {
    // arrange
    // act
    var isLeap = leapYear(2004);
    // assert
    assert(isLeap);
  });
});
