// scope , closure and HOF

//  only valid to let and const
// Global scope - accessible everywhere
//  functional scope - accessible to only that function
//  Block level scope - accessible to that block

// let a = 10;
// const b = 20;

// if(true){
//     var d = 100;
//     // console.log(a, b);
// }

// function greet(){
//     let c = 30;
//     console.log(a, b);
//     // console.log(c);
// }

// console.log(d);
// greet()





// let global = 40;

// function greet() {
//   let global = 30;
//   function meet() {
//     let global = 10;
//     console.log(global);
//   }
  
//   meet();
//   console.log(global);
// }

// greet();





// closure 

// function displayMesssage(){

//     function show(){
//         console.log("Javascript is awesome");
//     }

//     return show;
// }

// const message = displayMesssage();
// console.log(message);
// message();




// closure 

// function counter(){
//     let count = 0;
//     function increment(){
//         count++;
//         return count;
//     }
//     return increment;
// }

// let counts = counter();
// console.log(counts());
// console.log(counts());
// console.log(counts());



// closure 

// function transactions(name){
//     let balance = 2000;

//     let user = {
//         name: name,

//         deposit: function(amount){
//             balance += amount;
//             return balance;
//         },

//         withdraw: function(amount){
//             balance -= amount;
//             return balance;
//         },

//         getBalance: function(){
//             return balance;
//         }
//     }

//     return user;
// }

// const user1 = transactions("Ketan");
// console.log(user1.getBalance());




// HOF - Higher Order Function

// function returning another function 

// function one(){
//     function two(){
//         console.log("This is function two");
//     }

//     return two;
// }

// // const result = one();
// // result();

// console.log(one())



function calc(value){
    function multiply(num){
        return value * num;
    }

    return multiply;
}

// console.log(calc());

const result = calc(10);
console.log(result(2));