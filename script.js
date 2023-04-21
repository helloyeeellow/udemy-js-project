// Циклы

// let s = 0;

// while (s < 6) {
//   console.log(s);
//   s++;
// }

// outer: for (let num = 0; num < 3; num++) {
//   for (let size = 0; size < 3; size++) {
//     if (size == 1) {
//       continue outer;
//     }
//     console.log(size);
//   }
// }

// Обькты

// let firstPart = "likes";
// let userInfo = {
//   name: "Вася",
//   age: 30,
//   [firstPart + " javascriipt"]: true,
// };
// console.log(["likes javascript"]);

// let userInfo = {
//   name: "Вася",
//   age: 30,
//   58: "Значение свойтсва",
// };
// console.log(userInfo[58]);

let userInfo = {
  name: "Вася",
  age: 30,
};
let user = userInfo;
user.age = 45;

console.log(userInfo.age);
