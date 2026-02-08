//  async await

// async function always return a promise

// async function greet(){
//     return "Hello Ketan";
//     // return new Promise((resolve, reject) =>{
//     //     resolve("Hello Ketan");
//     // })
// }

// const result = greet();
// // console.log(result);

// result.then((data) => console.log(data))
// .catch((error)=> {
//     console.log("Error: ",error);
// })

// const response = await fetch("https://api.github.com/users");
// const data = await response.json();
// console.log(data);

const github = async function () {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  console.log(data);
};

github();

console.log("Hello Ketan");