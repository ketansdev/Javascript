//  operator

// Arithmetic

// console.log(2 + 5)
// console.log(2 - 5)
// console.log(2 * 5)
// console.log(6 / 2)
// console.log(5 % 2)

// console.log(5 ** 3)

/****************************************************************************** */

// Assignment Operator

// let x = 20;
// let y = 10;

// // x = x + y;
// // x = x - y
// // x = x * y

// // x += y
// // x -= y
// // x *= y
// console.log(x)

/****************************************************************************** */

// Comparison Operator

// let x = 20;
// let y = 10;

// console.log(x > y)
// console.log(x < y)

// console.log(x >= y)
// console.log(x <= y)

// console.log(x == y)
// console.log(x === y)

/****************************************************************************** */

// let z = "10"
// let a = Number(z)

// console.log(typeof a, a)

//  string ---> Number
// let a = "121ac";
// let b = Number(a);

// console.log(typeof b)
// console.log(b)
// console.log(0/0)

//  NaN : Not a number (Type of NaN is number)

/****************************************************************************** */

// Number ---> String
// let a = 20;
// let b = String(a)

// console.log(typeof b , b)

/****************************************************************************** */

// Boolean ---> Number
// console.log(Number(true))
// console.log(Number(false))

/****************************************************************************** */

// // Null ---> Number
// console.log(Number(null)) /** 0 */

// // undefined ---> number
// console.log(Number(undefined)) /** NaN **/

/****************************************************************************** */

// Boolean --> String
// console.log(typeof String(true), String(true))
// console.log(typeof String(false), String(false))

// console.log(typeof String(null), String(null))
// console.log(typeof String(undefined), String(undefined))

/****************************************************************************** */

// Number, string, null, undefined ---> Boolean

// console.log(Boolean(10))
// console.log(Boolean(0))
// console.log(Boolean(-30))

// console.log(Boolean("yes"))
// console.log(Boolean(""))
// console.log(Boolean(""))

// console.log(Boolean(undefined))
// console.log(Boolean(null))

/****************************************************************************** */

// computer science challenge

// let a = 0.1;
// let b = 0.2;

// let c = a + b;

// console.log(c, c == 0.3)

/****************************************************************************** */

// 1. null is loosely equal to undefined

// console.log(null == undefined);
// console.log(null === undefined);

// console.log(null == 0);
// console.log(null == "");
// console.log(null == false);

// >, <, >=, <= (null ---> number, undefined ---> NaN)

// console.log(null >= 0)
// console.log(null <= 0)
// console.log(null > 0)
// console.log(null < 0)

// console.log(null >= undefined)
// console.log(undefined >= 0)

/****************************************************************************** */

// console.log("Ketan" > "Chetan")

// console.log(10 > "10")
// console.log(10 >= "10")

// console.log(NaN == "NaN")
// console.log(NaN === "NaN")

/****************************************************************************** */

// For loop

// for(let i = 0; i < 10; i ++){
//     console.log(i)
// }

/****************************************************************************** */

// While loop

// let i = 0

// while(i < 10){
//     console.log(i);
//     i++
// }

/****************************************************************************** */

//  do while

// let i = 0;

// do{
//     console.log(i);
//     i++
// }while(i < 20)

/****************************************************************************** */

// let age = 26;

// if( age >= 18){
//     console.log("Can Vote");
// }else{
//     console.log("Cannot Vote");
// }

// kid , young and old

// let age = 20;

// if (age < 18) {
//   console.log("Kid");
// } else if (age >= 60) {
//   console.log("Old");
// } else {
//   console.log("Young");
// }


/****************************************************************************** */

// logical operator 

// && , ||

// console.log(true && true)
// console.log( true && false)
// console.log( false && false)
// console.log( false && true)


// console.log(true || true)
// console.log( true || false)
// console.log( false || false)
// console.log( false || true)



// let a = 0;
// let b = 20;

// console.log(a&&b); 

// && If first value is false, it will return the first value iteself
//  If first value is true, it will return the second value


//  || or

// let a = 0;
// let b = 20;

// console.log(a || b)

// || If first value is true, it will return the first value iteself
//  If first value is false, it will return the second value


//  !=

// console.log(4 != 5)