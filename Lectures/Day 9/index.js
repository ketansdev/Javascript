//  function

// function greeting(){
//     console.log("Namaste Javascript");
//     return 10;
// }

// function addNumber(num1, num2){
//     const sum = num1 + num2;
//     console.log(sum);
// }


// greeting();
// addNumber(5, 6);
// addNumber(5, 2);

// console.log(greeting());



// function addNumber(a, b, c= 0, d= 0){
//     const sum = a + b + c + d;
//     console.log(sum);
// }

// addNumber(2, 5);
// addNumber(2, 5, 8);
// addNumber(2, 3, 4, 5);



// rest operator ...num

// function addNumber(...num){
//     let sum = 0;
//     for(let n of num){
//         sum += n
//     }
//     console.log(sum);
// }

// addNumber(2, 4, 5);
// addNumber(3, 9);



// const arr = [10, 20, 30, 40, 50];
// const arr2 = [60, 70, 80, 90];

// // const [first, second, ...num] = arr;
// // console.log(first, second, num);

// const newArr = [...arr, ...arr2];
// console.log(newArr);





// function: expression

// const addNumber = function(num1, num2){
//     return num1 + num2;
// }

// console.log(addNumber(2, 5))

// const greeting = function(name){
//     return `Hello ${name}`;
// }

// console.log(greeting("Ketan"));



// we can call before defining 
// console.log(addNumber(5, 10));

// function addNumber(num1, num2){
//     return num1 + num2;
// }




//  arrow function

// const addNumber = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addNumber(2,4));


// const greeting = (name, language) => {
//     console.log(`My name is ${name} and I'm learning ${language}`)
// }
// greeting("Ketan", "Javascript");


// const displayMessage = () =>  "Hello";
// console.log(displayMessage());

// const sum = (a, b) =>  a + b;
// console.log(sum(2,5));





// sort test - used arrow function

// let arr = [10, 30, 20, 90, 50];
// console.log(arr.sort((a, b) => a - b));




//  if we have single paramenter , no need of this ()

// const squareNumber = n => n * n;
// console.log(squareNumber(4));





// const greeting = () => {
//     return {
//         name : "Ketan",
//         age: 25,
//     }
// }

// console.log(greeting())



// const greeting = () => ({name: "Ketan", age: 25})
// console.log(greeting());