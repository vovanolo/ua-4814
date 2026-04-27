//  const openTab = window.open("https://www.w3schools.com",
// "w3schools", "width=200,height=200,left=700,top=200");

// openTab.close();

// const title = document.querySelector("#title");


// title.onclick = function() {
//     alert("click click");
// }

// function clickable() {
//    alert("click click");
// }

// function handleckick() {
//     console.log("element was clicked");
// }

// title.addEventListener("click", handleckick);

// title.addEventListener("click", function() {
//     alert("clickkkkk");
// })

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", function(event) {
//     console.log(event.type);
//     console.log(event.target);
//     event.target.style.color = 'red';
// })

// function handleEvent(event) {
//     if(event.type === 'click'){
//         console.log("clicked");
//     }
//     if(event.type === 'mouseover'){
//         console.log("mouse over");
//     }
// }

// btn.addEventListener("click", handleEvent);
// btn.addEventListener("mouseover", handleEvent);

// const btn = document.querySelector("#btn");

// const title = document.querySelector("#title");

// btn.addEventListener("click", function() {
//     // title.style.color = 'red';
//     title.classList.add("new-style");
// })

// const signUp = document.querySelector("#signUp");
// const usersList = document.querySelector("#usersList");

// // console.log(signUp);

// signUp.addEventListener("submit", function(event) {
//     event.preventDefault();
// //    console.log(event.target.username.value)
// //    console.log(event.target.email.value)

//     usersList.innerHTML += `<li>${event.target.username.value} - ${event.target.email.value}</li>`
//     event.target.reset();
// })

// forEach map filter reduce

const numbers = [1,2,3,4,5,6,7,8,9,10];


// numbers.forEach(function(element, index) {
//     // console.log(element);
//     // console.log(index);
// })

// const newNumbers = numbers.map(function(element, index) {
//     return element + 10;
// })

// console.log(newNumbers);

// const filteredNumbers = numbers.filter(function(number) {
//     return number >= 5; 
// })

// console.log(filteredNumbers);

// const mult = numbers.reduce(function(acc, number) {
//     return acc * number;
// }, 1);

// console.log(mult);