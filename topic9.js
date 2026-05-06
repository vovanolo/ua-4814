// console.log(1);
// console.log(2);
// console.log(3);

// setTimeout(() => {
//     console.log("Hello");
// }, 3000);

// console.log(1);

// setTimeout(() => {
//     console.log(2);
// });

// console.log(3);

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(1, 2));

// function sum(a, b) {
//     return new Promise((resolve, reject) => {
//         resolve(a + b);
//     })
// }


// function sum(a, b) {
//     return new Promise((resolve, reject) => {
//         if (a < 0) {
//             reject("a should be non-negative");
//         }
//         resolve(a + b);
//     })
// }

// sum(-1,5).then(result => console.log(result),
//               error => console.log(error));
// console.log(sum(-1,5));

// sum(-1,5).then(result => console.log(result))
//          .catch(error => console.log(error));

// console.log(sum(1, 2));

// function sum(a, b) {
//     return new Promise((resolve, reject) => {
//         if (a < 0) {
//             reject("a should be non-negative");
//         }
//         resolve(a + b);
//     })
// }

// sum(1, 2).then(result => result * 10)
//          .then(result => result - 5)
//          .then(result => console.log(result))

// sum(1, 2).then(result => result * 10)
//          .then(result => sum(result, 5))
//          .then(result => console.log(result))

// sum(-1, 2).then(result => result * 10)
//          .catch(error => {
//                 console.log(error);
//                 return sum(1,2);
//          })
//         .then(result => console.log(result))

// const prom = Promise.resolve(5);


// async function sum(a,b) {
//     const number = await prom;
//     console.log(number + a + b);
// }

// console.log(sum(1, 2));
// sum(1, 2).then(result => console.log(result));
// sum(1, 2);

import {double, numbers} from "./logic.js";

// console.log(numbers)
// console.log(double(5));

// localStorage.setItem("name", "John");

// console.log(localStorage.getItem("name"));

// localStorage.removeItem("name");

// localStorage.clear();

// const users = [
//     {name: "John", age: 30},
//     {name: "Jane", age: 25},
//     {name: "Jack", age: 35}
// ]

// localStorage.setItem("users", JSON.stringify(users));

// const usersFromStorage = JSON.parse(localStorage.getItem("users"));

// usersFromStorage.push({name: "Jill", age: 28});

// localStorage.setItem("users", JSON.stringify(usersFromStorage));

// console.log(usersFromStorage);