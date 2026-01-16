// Object
// CRUD operation : Create Read Update Delete
//  key value

// create
// const user = {
//     name: "Ketan",
//     age: 25,
//     emailId: "ketanshetgedev@gmail.com",
//     amount: 10000
// }

// console.log(user)
// console.log(typeof user)

// read
// console.log(user.age);
// console.log(user["name"]);
// console.log(user.emailId);

// // update
// user.aadhar = 94355435883426;
// user.amount = 11000;


// // delete
// delete user.emailId;
// console.log(user);





// const user = {
//     name: "Ketan",
//     age: 25,
//     emailId: "ketanshetgedev@gmail.com",
//     amount: 10000
// }

// const user2 = user;
// user2.age = 90

// console.log(user);



// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));



// for(let key  in user){
//     console.log(key, user[key]);
// }






// const user = {
//     name: "Ketan",
//     age: 25,
//     emailId: "ketanshetgedev@gmail.com",
//     amount: 10000
// }

// const name = user.name;
// const age = user.age;

// destructuring the object
// const {name: userName, age: userAge, amount: userAmount} = user

// console.log(userName, userAge, userAmount);


// destructuring the array

// const arr = [20, 40, "Javascript", true];

// const [first, second, third] = arr;

// console.log(first, second, third);




// const user = {
//     name: "Ketan",
//     age: 25,
//     emailId: "ketanshetgedev@gmail.com",
//     amount: 10000
// }

// for(let key of Object.keys(user)){
//     console.log(key);
// }

// for(let value of Object.values(user)){
//     console.log(value);
// }

// for(let [keys, values] of Object.entries(user)){
//     console.log(keys, values);
// }





// const user = {
//     name: "Ketan",
//     age: 25,
//     emailId: "ketanshetgedev@gmail.com",
//     amount: 10000,
//     greeting: function(){
//         console.log(`Hello Javascript- ${this.name}`);
//         return 20;
//     }
// }

// // console.log(user.greeting());

// let result = user.greeting();
// console.log(result);

// const user2 = {
//     name: "Swapnil",
//     age: 30
// }

// user2.greeting = user.greeting;

// console.log(user2);
// user2.greeting();





// const user = {
//     name: "Ketan",
//     age: 25,
//     emailId: "ketanshetgedev@gmail.com",
//     amount: 10000,

//     address:{
//         city: "Mumbai",
//         state: "Maharashtra"
//     }
// }


// console.log(user);
// console.log(user.address);
// console.log(user.address.state);


// shallow copy
// const user2 = {...user};
// user2.name = "Yash";
// user2.address.city = "Pune";

// console.log(user2);


// Deep copy
// const user2 = structuredClone(user);
// user2.address.city = "Pune";
// console.log(user);
// console.log(user2);



// const ig = Symbol("id");

// const user = {
//     name: "Ketan",
//     age: 25,
//     emailId: "ketanshetgedev@gmail.com",
//     amount: 10000,

//     200: 2000,
//     500: 5000,
//     [ig]: "Instagram"
// }

// console.log(user["200"]);

// console.log(user[ig]);