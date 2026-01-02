// let name = "Ketan";
// let age = 20;


// age = 30;

// console.log(name, age)



// const account = 500;
// // account = 1000

// console.log(account)



// // old method 
// var a = 10;
// a = 20;
// console.log(a)



// if(true){
//     var a = 100
// }

// console.log(a)



// if(true){
//     let b = 500
// }

// console.log(b)



// function add(){
//     var sum = 5 + 2
// }

// console.log(sum)

// // ********************************************************************************

// // Data Types 

// // Prmitive data type

// number, string , boolean, undefined, null, bigint, symbol

// number
// let a = 10;
// let b = 2.35
// console.log(a, b);


// // string
// let c = "Javascript is easy";
// let d = "I am learning";

// console.log(c, d)


// // boolean

// let login = true
// let f = false

// console.log(login, f)


// // undefined

// let user;

// console.log(user)


// // bigint
// let num = 3459437957576576576577574375437n;
// // let num1 = 3459437957576576576577574375437
// console.log(num)


// // null
// let  weather = null

// console.log(weather)


// // symbol
// const id1 = Symbol("id");

// console.log(id1)

// // ***********************************************************************************
// // Non Primiive data types

// // array, object, function

// // array
// let arr = [10, 20, 11, "Ketan", true]

// console.log(arr)


// // object
// let obj = {
//     name: "Ketan",
//     account: 12345,
//     age: 25,
//     category: "OBC"
// }

// console.log(obj)



// // function
// function add(){
//     console.log("Hello")
// }

// add()

// let s = function add(){
//     console.log("Hello");
// }

// s()



// Data type

// let a = 20
// let b = 2.5

// console.log(typeof(a))
// console.log(typeof(b))


// let name = "ketan"
// console.log(typeof(name))


// let t = true;
// console.log(typeof(t))


// let user;
// console.log(typeof user)


// let numBig = 646546565934593593593469563546543n
// console.log(typeof numBig)


// let weather = null;
// console.log(typeof weather)


// let obj = {
//     name: "Ketan",
//     age: 25
// }

// console.log(typeof(obj))


// let arr = [1, 3, 50, "Ketan"]
// console.log(typeof arr)


// let show = function printHello(){
//     console.log("Hello");
// }

// console.log(typeof show)




// primitivie data type is immutable

let string = "Ketan"
string[0] = "N";

console.log(string)

// non -primitive data types are mutable

let arr = [10, 20, 30, 40];

arr[0] = 100
arr.push(200)
console.log(arr)

let obj = {
    name: "Ketan",
    age: 25
}

obj.name = "Nikhil"

console.log(obj)