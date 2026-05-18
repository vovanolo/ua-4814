// console.log(fetch("https://jsonplaceholder.typicode.com/photos"));

// fetch("https://jsonplaceholder.typicode.com/photos")
//     .then((response) => response.json())
//     .then((data) => console.log(data[0]));

// async function fetchData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/photos");
//     const data = await response.json();
//     console.log(data[0]);
// }

// fetchData();

// const btn = document.getElementById("btn");

// const postsList = document.getElementById("postsList");


// btn.addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => response.json())
//         .then((data) => {
//             data.map(post => {
//                 postsList.innerHTML += `<li>${post.id} : ${post.title}</li>`;
//             })
//         });
// // })

// const btn = document.getElementById("btn");

// const postsList = document.getElementById("postsList");

// const postInput = document.getElementById("postInput");


// btn.addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => response.json())
//         .then((data) => {
//             data.map(post => {
//                 if (postInput.value === post.title) {
//                     postsList.innerHTML += `<li>${post.id} : ${post.title}</li>`;
//                 }
//             })
//         });
            
// })


const data = {
    title: 'name',
    body: 'content',
    userId: 1,
}
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));