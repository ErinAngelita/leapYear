function leapYear(year){
  if (year % 400 === 0) {
    return "Leap Year!";
  } else if (year % 100 === 0){
    return "Not a Leap Year";
  } else if (year % 4 === 0){
    return "Leap Year!";
  }
  return "Not a Leap Year";
}

module.exports = leapYear;
