var assert = require('chai').assert;
var leapYear = require('./leapYear');

describe("leapYear", () => {
  it("returns 2003 as not a leap year", () => {
    // arrange
    var expected = "Not a Leap Year";
    // act
    var isLeap = leapYear(2003);
    // assert
    assert.equal(isLeap, expected);
  });
  it("returns 2004 as a leap year", () => {
    // arrange
    var expected = "Leap Year!";
    // act
    var isLeap = leapYear(2004);
    // assert
    assert.equal(isLeap, expected);
  });
  it("returns 2100 as not a leap year", () => {
    // arrange
    var expected = "Not a Leap Year";
    // act
    var isLeap = leapYear(2100);
    // assert
    assert.equal(isLeap, expected);
  });
  it("returns 2400 as a leap year", () => {
    //arrange
    var expected = "Leap Year!";
    //act
    var isLeap = leapYear(2400);
    //assert
    assert.equal(isLeap, expected);
  });
});
