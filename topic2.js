// масиви
// цикли
// функції


// масиви
// [1, 2,3,4,5, "Hello", true, [1,2,3], {name: "John"}]
// [1 - 0, 2 - 1, 3 - 2, 4 - 3, 5 - 4]

// let arr = [1,2,3,4,5]

// console.log(arr[3]);

// const PI = 3.14;

// const students = ["John", "Jane", "Jack", "Jill"];

// students[1] = "Janet";

// students[4] = "James";

// students.push("Jessica", "Jeremy"); 

// students.pop();

// students.unshift("Jasmine");

// students.shift();

// console.log(students.slice(1, 3)); // ["Janet", "Jack"]

// students.splice(1, 1, "Ivan");

// console.log(students);

// console.log(typeof students);


// students[7] = "Jessica";

// console.log(students[6]);

//  const students = ["John", "Jane", "Jack", "Jill"];

//  console.log(students.length);

// цикли

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// while
// for 
// for of
// for in

// while (умова) {
//     // код, який буде виконуватися, поки умова істинна
// }

// let i = 1;

// while (i <= 5) { // 6 <= 5 - false
//     console.log(i); // 1, 2, 3 ,4, 5 
//     i += 1; //i = 6
// }

// for (let i = 1; i <= 5; i += 1 ){
//     console.log(i); // 1, 2, 3, 4, 5
// }

// for (let i = 5; i >= 1; i -= 1 ){
//     console.log(i); // 1, 2, 3, 4, 5
// }

// const students = ["John", "Jane", "Jack", "Jill"];

// for (let i = 0; i < students.length; i += 1){
//     console.log(students[i]);
// }

// break
// continue

// for (let i = 0; i < students.length; i += 1){
//     console.log(students[i]);
//     if (students[i] === "Jack") {
//         break; // вихід з циклу
//     }
// }

// for (let i = 0; i < students.length; i += 1){
//     if (students[i] === "Jack") {
//         continue; // пропуск ітерації
//     }
//     console.log(students[i]);
// }

// const students = ["John", "Jane", "Jack", "Jill"];

// for (const student of students){
//     console.log(student);
// }


// for (const index in students){
//     // console.log(index);
//     console.log(students[index]);
// }


// функції

// function sayHello() {
//     console.log("Hello");
// }

// sayHello();
// sayHello();
// sayHello();

// function sum(a, b) {
//     console.log(a + b);
// }

// sum(2, 3);

// sum(10, 20);

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(2, 4))

// let result = sum(10, 20);

// console.log(result);

// function sum(){
//     // console.log(arguments);
//     let total = 0;
//     for (let i = 0; i < arguments.length; i += 1){
//         total += arguments[i];
//     }
//     return total;
// }

// console.log(sum(1,4,5,7,8,6,7,7,8,8,9,9,7,6,5,4,3,4,6,7,5));

// function mult(){
//     // console.log(arguments);
//     let total = 1;
//     for (let i = 0; i < arguments.length; i += 1){
//         total *= arguments[i];
//     }
//     return total;
// }

// console.log(mult(1,4,5,7,8,6,7,7,8,8,9,9,7,6,5,4,3,4,6,7,5));

// function declaration
// function expression

// declaration();

// expression();


// function declaration(){
//     console.log("Hello from declaration");
// }

// const expression = function() {
//     console.log("Hello from expression");
// }

// console.log(num);


// const num = 10;