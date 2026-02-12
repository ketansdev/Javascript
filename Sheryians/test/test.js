
// if(true){
//     var a = 25;
// }

// console.log(a);


// function test(){
//     var a = 20;
    
// }

// console.log(a);
// test();

// console.log(b);

// console.log(a);

// if(true){

// }


// if(true){
    
// }

// if(true){
    
// }

// // let a = 25;

// var b = 20;


// console.log(nm);

// var nm = "ketan";


// console.log(age);

// let age = 25;


// 
// 
// 

// var x = 1;
// {
//     var x = 2;
// }

// console.log(x);

// 
// 
// 

// let a = 10;

// {
//     let a = 20;
//     console.log("Inside:", a);
// }

// console.log("Outside:", a);


// const obj = {name: "Ketan"};

// obj["age"] = 25;

// console.log(obj);



/*************************************** */

// . Declare your name and city using const , and your age using let .

// const name = "Ketan";
// const city = "Mumbai";

// let age = 25;

// console.log(name, city, age);

/***************************************** */

// let x = 5;
// let x = 10;


// console.log(count);
// var count = 42;


// const obj = {
//     name: "Ketan",
// }

// obj.city = "Mumbai";

// console.log(obj);


// console.log(age);

// let age = 30;


// const arr = [10, 20, 30];

// arr.push(40);
// console.log(arr);



// console.log(typeof(12.5)); 



// console.log(typeof NaN);


// let a;

// console.log(a);


// console.log(5 + "11");


// console.log("1" + (2 + 5))


// console.log(2*"Ketan");

// console.log(parseInt("hii"));

// console.log(null + 1);  // 0 + 1 = 1
// console.log("5" + 3);  // "53" - concatenation
// console.log("5" - 3);  // 5 - 3 = 2
// console.log(true + false); // 1 + 0 = 1



// console.log(typeof []); // object
// console.log(typeof null); // object - known bug
// console.log(typeof 123n); // bigint



// console.log(Boolean(0)); // falsy
// console.log(Boolean("0")); // truthy
// console.log(Boolean([])); // truthy
// console.log(Boolean(undefined));// falsy


const isEmpty = function(value){
    if(value === null || value === undefined || value === ""){
        return true
    }else{
        return false;
    }
}

const result = isEmpty("Ketan");
console.log(result);


console.log(5 == "5"); // true
console.log(5 === "5"); // false