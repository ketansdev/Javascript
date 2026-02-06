// console.log("Hello World");

// // code

// const p1 = fetch("https://api.github.com/users");

// const p2 = p1.then((response) =>{
//     return response.json()
// })

// p2.then((data) =>{
//     console.log(data);
// })

// console.log("Hello World End")

// promise chaining

// fetch("https://api.github.com/users")
//   .then((response) => {

//     if(! response.ok){
//         throw new Error("Data is not present in server")
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     const parent = document.getElementById("first");

//     for (let i = 0; i < data.length; i++) {
//       let image = document.createElement("img");
//       image.src = data[i]["avatar_url"];

//       parent.append(image);
//     }
//   })
//   .catch((error) => {
//     const parent = document.getElementById("first");
//     parent.textContent = error.message;
//   });



// const obj1 = {
//     name: "Ketan",
//     age: 26,
//     address : "Mumbai",
//     c: undefined,
//     boolean: true
// };

// // convert to JSON

// const jsonFormat = JSON.stringify(obj1);
// console.log(jsonFormat);

// const json = `{
//     "name" : "ketan",
//     "age": 25,
//     "place": "Mumbai"
// }`

// const jsObject = JSON.parse(json);
// console.log(jsObject);







//  create promise

const p1 = new Promise ((resolve, reject) =>{
    resolve("Hello");
})

p1.then((response) =>{
    console.log(response)
})
.catch((error) =>{
    console.log(error);
})

// console.log(p1);