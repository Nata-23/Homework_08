"use strict";
//1
// const dateofBirth = new Date("1978-11-23");
// console.log(`
//   ${dateofBirth.getDate()}.${
//   dateofBirth.getMonth() + 1
// }.${dateofBirth.getFullYear()}`);

//2
// function getDiffDays(dateofStart, dateofEnd) {
//   const firstDate = new Date(dateofStart);
//   const secondDate = new Date(dateofEnd);
//   if (isNaN(firstDate) || isNaN(secondDate)) {
//     return "Error: invalid date";
//   } else if (Date.parse(dateofStart) > Date.parse(dateofEnd)) {
//     return "Error:your start date is later than end";
//   } else {
//     const oneDay = 1000 * 60 * 60 * 24;
//     return Math.round((secondDate.getTime() - firstDate.getTime()) / oneDay);
//   }
// }
// console.log(getDiffDays("2020-01-01", "2020-01-17")); // 16
// console.log(getDiffDays("2020-01-01", "2020-03-15")); // 74
// console.log(getDiffDays("2222222222", "2020-03-15")); // Error: invalid date
// console.log(getDiffDays("2021-01-02", "2020-03-15")); // Error: your start date is later than end

//3
// const isWeekend = (newDate) => {
//   const date = new Date(newDate);
//   return date.getDay() >= 1 && date.getDay() <= 5 ? false : true;
// };
// console.log(isWeekend("2022-02-12")); // true
// console.log(isWeekend("2022-02-13")); // true
// console.log(isWeekend("2022-02-09")); // false

//4
const person = {
  fullName: "Sherlock Holmes",
  address: {
    street: "Baker Street",
    city: "London",
    house: "221b",
  },
};

const json = JSON.stringify(person);
console.log(json);
const newObject = JSON.parse(json);
console.log(newObject);

const {
  address: { street, city, house },
  fullName,
} = person;
console.log(fullName, street, city, house);
