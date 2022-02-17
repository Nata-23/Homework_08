"use strict";
//1
// const dateofBirth = new Date("1978-11-23");
// console.log(`
//   ${dateofBirth.getDate()}.${
//   dateofBirth.getMonth() + 1
// }.${dateofBirth.getFullYear()}`);

//2
function getDiffDays(dateofStart, dateofEnd) {
  const a = new Date(dateofStart);
  const b = new Date(dateofEnd);
  if (isNaN(a) || isNaN(b)) {
    console.error("Error: invalid date");
  } else if (Date.parse(dateofStart) > Date.parse(dateofEnd)) {
    console.error("Error:your start date is later than end");
  } else {
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.round((b.getTime() - a.getTime()) / oneDay);
  }
}
console.log(getDiffDays("2020-01-01", "2020-01-17")); // 16
console.log(getDiffDays("2020-01-01", "2020-03-15")); // 74
console.log(getDiffDays("2222222222", "2020-03-15")); // Error: invalid date
console.log(getDiffDays("2021-01-02", "2020-03-15")); // Error: your start date is later than end
