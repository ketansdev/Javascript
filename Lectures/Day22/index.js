// this call apply and bind
// this : class object method
// strict mode vs non strict mode

// Global Object: In browser it is called window and in node js , it is called global
// globalThis : Points to global object of the environment

// this keyword in global scope: Node JS(Empty Object), in browser it points to global object
//  arrow function takes this keyword from lexical environment scope

// normal function : non strict mode, this will point to global object
// in strict mode : it will point to undefined


// call apply and bind this point to invoking object


//  In class constructor , this will point to newly created empty object

// "use strict";

// var a = 20;
// let b = 10;

// console.log(a, b);


// function greet(name1, name1){
//     console.log(name1, name1);
// }

// greet("Ketan", "Yash");



// console.log(window);
// console.log(globalThis);



// About this keyword
// "use strict"
// console.log(this)






// // Function

// const user = {
//     name: "Ketan",
//     age: 26,
//     greet: function(){
//         console.log(`Hi ${this.name}`)
//     }
// }

// // this == user


// // const user2 = {
// //     name: "Yash",
// // }

// // user2.greet = user.greet;

// user2.greet();




// "use strict"

// function greet(){
//     console.log(this);
// }

// greet();



// "use strict"

// function greet(){
//     console.log(`Hi ${this.name}`);
// }

// function incrementAge(value, name){
//     this.age += value;
//     this.name = name;
//     console.log(this.age);
//     console.log(this.name);
// }

// const user = {
//     name: "Ketan",
//     age: 26
// }

// const user2 = {
//     name: "Yash",
//     age: 24
// }

// greet.call(user);
// greet.call(user2);

// call 
// incrementAge.call(user, 20, "Chetan")

// apply
// incrementAge.apply(user, [20, "Chetan"])


// bind
// const incr = incrementAge.bind(user2, 15, "Nikhil");
// incr();






//  class

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// // this points to empty object when new Person is created
// const p1 = new Person("Ketan", 26);
// console.log(p1); /* returns class object */




// Arrow Function : this doesnt exist for arrow function, lexical environment scope

// "use strict"
// const greet = () =>{
//     console.log(this);
// }

// greet();