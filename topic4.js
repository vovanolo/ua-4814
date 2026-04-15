    // обєкти
// const user = {
//     // ключ: значення
//     // key: value
// }

// const { use } = require("react");

// const user = {
//     name: 'John',
//     age: 30,
//     isAdmin: true,
//     city: 'Kyiv',
//     // friends: ['Alice', 'Bob', 'Charlie'],
//     friends: [{
//         name: 'Alice',
//         age: 25
//     }, {
//         name: 'Bob',
//         age: 27
//     }],
//     wife: {
//         name: 'Jane',
//         age: 28
//     }
// }


// console.log(user);
// console.log(user.name);

// user.name = 'Jane';

// user.city = 'New York';

// console.log(user.friends[0]);

// console.log(user.wife.name);
// console.log(user.friends[0].name);


// const user = {
//     name: 'John',
//     age: 30,
//     city: 'Kyiv',
//     greet: function() {
//         console.log("hello my name is " + this.name);
//     }
// }

// user.greet();

// const user = {
//     name: 'John',
//     age: 30,
//     city: 'Kyiv',
// }

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))


// class User {
//     constructor(name, age, city){
//         this.name = name,
//         this.age = age,
//         this.city = city
//     }
// }



// class User {
//     constructor(name, age, city){
//         this.name = name,
//         this.age = age,
//         this.city = city
//     }

//     greet() {
//         console.log("hello my name is " + this.name);
//     }
// }


// const user1 = new User("John", 30, "Kyiv");
// const user2 = new User("Jane", 28, "New York");
// const user3 = new User("Alice", 25, "London");

// console.log(user1);
// console.log(user2);
// console.log(user3);

// user1.greet();
// user2.greet();
// user3.greet();

// ООП - обєктно орієнтоване програмування

// наслідування
// поліморфізм
// інкапсуляція

// ecma script 6 - 2015 es2015 es2016 es2025

// class User {
//     constructor(name, age, city){
//         this.name = name,
//         this.age = age,
//         this.city = city
//     }

//     greet() {
//         console.log("hello my name is " + this.name);
//     }
// }

// class Student extends User {
//     constructor(name, age, city, year){
//         super(name, age, city);
//         this.year = year
//     }

//     myYear() {
//         console.log("I am in year " + this.year);
//     }

//     greet() {
//         super.greet();
//         console.log("I am a student");
//     }

// }

// const student1 = new Student("John", 30, "Kyiv", 2020);

// console.log(student1);

// student1.greet();

// student1.myYear();


// інкапсуляція

// публічні
// приватні

// class User {
//     #password;
//     constructor(name, password){
//         this.name = name;
//         this.#password = password;
//     }

//     get password() {
//         return this.#password;
//     }

//     set password(newPassword) {
//         if (newPassword.length < 6) {
//             console.log("Password must be at least 6 characters long");
//         } else {
//             this.#password = newPassword;
//         }
//     }
// }

// const user1 = new User("John", "secret");

// user1.password = "12345678"; // Password must be at least 6 characters long

// console.log(user1.password);

// console.log(user1.#password);
// user1.#password = "newsecret";

// user1.name = "Jane";

// console.log(user1.name);