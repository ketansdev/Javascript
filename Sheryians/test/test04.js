// (function(){
//     console.log("Hii");
// })()



// Q1 Whats the difference between function declaration and expression in terms of hoisting ?

// - Function declarations can be hoisted but function definition cannot be hoist it gives us error that cannot access greet before initialization 
// greet()


// function greet(){
//     console.log("Hello");
// }


// greet()


// let greet = function(){
//     console.log("Hello");
// }




// Q2. convert function to arrow function 

// function multiply(a, b){
//     return a * b
// }

// let multiply = (a, b) => {
//     return a * b;
// }




//  Q . Use rest parameter to accept any number of scores and return the total


// function getScores(...score){
//     let sum = 0;
//     console.log(score.length);
//     for(let i = 0; i < score.length; i++){
//         sum += score[i];
//     }
//     return sum;
// }

// let result = getScores(10, 12, 45, 67, 90);
// console.log(result);




// function getScores(...score){
//     let sum = 0;
//     score.forEach((val) =>{
//         sum += val;
//     })
//     return sum;
// }

// let result = getScores(10, 12, 14, 18);
// console.log(result);





//  Fix the function using early return 

// function checkAge(age){
//     if(age < 18){
//         console.log("Too Young");
//     }else{
//         console.log("Allowed");
//     }
// }


// function checkAge(age){
//     if(age < 18) return "Too Young";
//     return "Allowed"
// }

// console.log(checkAge(13));



// function demo(val){
//     val();
// }

// demo(function(){
//     console.log("Hello");
// })