// дебагінг

// console.log()

// let a = 5;
// let b = 10;
// let c = 30;

// let d = a + b + c;

// console.log("Сума: a+b+c = ", d);

// let e = a * b * c;

// console.log("Добуток: a*b*c = ", e);

// let f = (a + b) * c;

// console.log("Сума a+b помножена на c: (a+b)*c = ", f);

// let g = a + b * f;

// console.log("Сума a та добутку b та f: a + b*f = ", g);


// let a = 5;
// let b = 10;
// let c = 30;

// let d = a + b + c;

// let e = a * b * c;

// let f = (a + b) * c;

// let g = a + b * f;

// for (let i = 1; i <= 5; i += 1 ){
//     console.log(i);
// }

// логічні помилки

// синтаксичні помилки

// console.log(;

// рантайм - рефернс помилки

// printMe();

// try catch

// try {
//     console.log("Start of try block");
//     console.log(;
//     console.log("End of try block");
// } catch(error) {
//     console.log("Start of catch block");
// }

// Error
// TypeError
// ReferenceError
// SyntaxError
// RangeError
// EvalError

// throw new Error("This is a custom error message");

// class AgeError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "AgeError";
//     }
// }

// try {
//     let age = 101;
//     if (age < 18) {
//         throw new AgeError("You must be at least 18 years old.");
//     }
//     if (age > 100){
//         throw new RangeError("Age must be less than or equal to 100.");
//     }
// } catch (error) {
//     if (error instanceof RangeError) {
//         // console.log("RangeError caught: ", error.message);
//         console.error("RangeError caught: ", error.message);
//     } else if (error instanceof AgeError) {
//         console.log("AgeError caught: ", error.message);
//     } 
// }

// console.error("This is an error message");


// try{
//         console.log("Start of try block");
//         printMe();
// }catch(error) {
//         console.log("Catch block");
// } finally {
//         console.log("Finally block");
// }