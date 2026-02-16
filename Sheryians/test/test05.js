// create array
// let arr = [10, 50, 67, 89, 45];

// access
// console.log(arr[1]);
// console.log(arr[4]);

//  modify
// arr[2] = 70
// console.log(arr);

//  methods

// push
// arr.push(500)
// console.log(arr);

// // pop
// arr.pop();
// console.log(arr);

// // shift
// arr.shift();
// console.log(arr);

// // unshift
// arr.unshift(200);
// console.log(arr)

// let arr = [10, 50, 67, 89, 45];

// splice
// console.log(arr.splice(1,2))
// console.log(arr);

// slice

// console.log(arr.slice(1, 3));
// console.log(arr);

// reverse
// console.log(arr.reverse())

// sort
// arr.sort((a, b) => a-b)
// console.log(arr);
// arr.sort((a, b) => b- a)
// console.log(arr);

// let arr = [10, 50, 67, 89, 45];

// for each
// arr.forEach((el) =>{
//     console.log(el)
// })

// arr.forEach(function(el){
//     console.log(el);
// })

// arr.forEach((val) =>{
//     console.log(val * 2)
// })

// let arr = [10, 50, 67, 89, 45];
// map

// let newArr = arr.map((val) => 12)
// console.log(newArr);

// let newArr = arr.map((val) =>{
//     if(val > 20) return val;
// })

// console.log(newArr);

//  Filter

// let arr = [10, 50, 67, 89, 45];

// let newArr = arr.filter((val) =>{
//     if(val > 50){
//         return true;
//     }
// })

// console.log(newArr)

//  reduce

// let arr = [1, 2, 3, 4, 5];

// let ans = arr.reduce((acc, val) => {
//   return acc + val;
// }, 0);
// console.log(ans);

// find

// let arr = [10, 50, 67, 89, 45];

// let ans = arr.find((val) => {
//     if(val === 50){
//         return val;
//     }
// })

// console.log(ans);

//  some

// let arr = [10, 50, 67, 89, 45];

// let ans = arr.some((val) => val > 80);
// console.log(ans);

// every

// let arr = [10, 50, 67, 89, 45];

// let ans = arr.every((val) => val > 9)

// console.log(ans)

// let arr = [10, 50, 67, 89, 45];

// destructuring
// let [a, b, , , c] = arr;
// console.log(a, b, c)

//  spread operator

// let arr = [10, 50, 67, 89, 45];
// // let arr2 = arr;
// // arr2.push(500);
// // console.log(arr2)
// // console.log(arr)

// let arr2 = [...arr];
// arr2.push(500)

// console.log(arr, arr2);

//  Q Create an array with 3 fruits and print the second fruit

// let fruits = ["apple", "banana", "watermelon"];

// console.log(fruits[1]);

//  Q Add Mango at the end and Pineapple at the beginning of this array

// let fruits = ["Apple", "Banana"];

// fruits.push("Mango");
// fruits.unshift("Pineapple");

// console.log(fruits);

//  Q Replace "Banana" with "Kiwi" in the below array

// let fruits = ["Apple", "Banana"];

// fruits[1] = "Kiwi";
// console.log(fruits);

// Q Whats the difference between .push() and .unshift()

// ans - Push add the element to the end of the array whereas .unshift adds the element at first inside the array

// Remove the last item from this array using a method

// let numbers = [1, 2, 3, 4];

// numbers.pop();
// console.log(numbers);

// Insert Red and Blue at Index 1 in this array

// let colors = ["Green", "Yellow"];

// colors.splice(1, 0, "Red", "Blue");
// console.log(colors);

//  Q Extract 2, 3, 4 from this array

// let items = [1, 2, 3, 4, 5, 6];

// console.log(items.slice(1, 4));

// Q Sort this aray alphabeticaqlly and then reverse it

// let names = ["Zara", "Arjun", "Mira", "Bhavya"];

// console.log(names.sort());
// console.log(names.sort().reverse());

//  Q. Use .map() to square each number

// let arr = [1, 2, 3, 4]

// let newArr = arr.map((val) => val ** 2)

// console.log(newArr);

//  Q. Use .filter() to keep numebrs greater than 10

// let arr = [5, 12, 8, 20, 3];

// let newArr = arr.filter((val) => {
//     return val > 10;
// })

// console.log(newArr);

//  Q. use .reduce() to find the sum of this array

// let arr = [10, 20, 30];

// let ans = arr.reduce((acc, val) => {
//     return acc + val;
// }, 0)

// console.log(ans);

//  Q. Use .find() to get the first number less than 10

// let arr = [12, 15, 3, 8, 20];
// let ans = arr.find((val) => {
//     return val < 10;
// })

// console.log(ans);

// Q. use .some() to check if any student has scored below 35;

// let arr = [45, 60, 28, 90];
// let ans = arr.some((val) => {
//   return val < 35;
// });

// console.log(ans);

//  Q. Use .every() to check if all numbers are even

// let arr = [2, 4, 6, 8, 10, 12];

// let ans = arr.every((val) =>{
//     return val % 2 === 0;
// })

// console.log(ans);

//  Q. Destructure this array to get the firstName and lastName

// let fullName = ["Ketan", "Shetge"];

// let [firstName, lastName] = fullName;

// console.log(firstName, lastName);

//  Q. Merge two arrays using spread operator

// let a = [1, 2];
// let b = [3, 4];

// let arr = [...a, ...b];
// console.log(arr);

//  Q. Add "India" to the start of this array using spread

// let countries = ["USA", "UK"];

// let updated = ["India", ...countries];
// console.log(updated);

//  Q. Clone this array properly (not by refernce)

// let arr = [1, 2, 3];

// let arr2 = [...arr];

// console.log(arr2);
