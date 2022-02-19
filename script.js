"use strict";
//1
const dateOfBirth = new Date("1978-11-23");
//1-st variant
// console.log(`
//   ${dateOfBirth.getDate()}.${
//   dateOfBirth.getMonth() + 1
// }.${dateOfBirth.getFullYear()}`);

//2-nd variant
// const date = dateOfBirth.getDate();
// const month = dateOfBirth.getMonth() + 1;
// const year = dateOfBirth.getFullYear();
// console.log(`${date}.${month}.${year}`);

//2
// function getDiffDays(dateofStart, dateofEnd) {
//   const firstDate = new Date(dateofStart);
//   const secondDate = new Date(dateofEnd);
//   const firstTimestamp = firstDate.getTime();
//   const secondTimestamp = secondDate.getTime();

//   if (isNaN(firstDate) || isNaN(secondDate)) {
//     console.error("invalid date");
//     return;
//   } else if (firstTimestamp > secondTimestamp) {
//     console.error("your start date is later than end");
//     return;
//   } else {
//     const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;
//     return Math.round((secondTimestamp - firstTimestamp) / ONE_DAY_IN_MS);
//   }
// }
// console.log(getDiffDays("2020-01-01", "2020-01-17")); // 16
// console.log(getDiffDays("2020-01-01", "2020-03-15")); // 74
// console.log(getDiffDays("2222222222", "2020-03-15")); // Error: invalid date
// console.log(getDiffDays("2021-01-02", "2020-03-15")); // Error: your start date is later than end

//3
// const isWeekend = (newDate) => {
//   const date = new Date(newDate);
//   const newDay = date.getDay();
//   return newDay === 6 || newDay === 0;
// };
// console.log(isWeekend("2022-02-12")); // true
// console.log(isWeekend("2022-02-13")); // true
// console.log(isWeekend("2022-02-09")); // false

//4
// const person = {
//   fullName: "Sherlock Holmes",
//   address: {
//     street: "Baker Street",
//     city: "London",
//     house: "221b",
//   },
// };
// const json = JSON.stringify(person);
// console.log(json);
// const newObject = JSON.parse(json);
// console.log(newObject);

// const {
//   address: { street, city, house },
//   fullName,
// } = person;
// console.log(fullName, street, city, house);
