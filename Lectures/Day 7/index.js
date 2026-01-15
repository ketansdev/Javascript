//  Array

// let marks = [100, 50, 70, 80, 90];

// console.log(marks);
// console.log(marks.length);
// console.log(typeof marks);

// let arr = [1000, 30, "Ketan", true];
// console.log(arr)
// console.log(arr[1])

// arr[1] = 85;
// console.log(arr);

// push : insert element at end
// arr.push(90);
// arr.push("Javascript");

// pop : delete element from end
// arr.pop();
// console.log(arr);

//  add and delete first place
// arr.unshift(10);
// arr.unshift(50);
// console.log(arr)

// delete
// arr.shift()
// console.log(arr);



// let arr = [10, 20, 30, 90, 11, 24];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }


// for(let num of arr){
//     console.log(num);
// }




// let arr = [10, 20, 30, 90, 11, 24];
// let arr2 = arr;

// arr2.push(30);

// console.log(arr);


// object (Non-primitive): Copy by reference
// Primitive: Copy by value
// const arr = [10, 20, 30, 90, 11, 24];
// arr = [80, 90, 23, 60];

// console.log(arr)



// const arr = [10, 20, 30, 90, 11, 24];
// let arr2 = arr.slice(1,5)

// console.log(arr2);

// arr.splice(1,3, "Ketan", 25, true, false)
// console.log(arr)




// const arr = [10, 20, 30, 90, 11, 24];
// const arr2 = ["Ketan", 25, true];

// arr.push(arr2);
// const result = arr.concat(arr2);

// spread operator
// const result = [...arr, ...arr2]

// console.log(result);





// join

// const names = ["Ketan", "Swapnil", "Yash", "Shubham"];

// console.log(names.toString())
// console.log(names.join());
// console.log(names.join("-"));
// console.log(names.join(" "));



// simple search
// const names = ["Ketan", "Swapnil", "Yash", "Shubham"];

// console.log(names.indexOf("Yash"));
// console.log(names.indexOf("john"));

// console.log(names.includes("Shubham"));




// const names = ["Ketan", "Swapnil", "Yash", "Shubham", "Rohit", "Mohit"];
// // sorting
// names.sort();

// // reverse
// names.reverse()
// console.log(names); /* descending sort */




// const a = [101, 90, 80, 32, 91]

// // ascending order
// a.sort((a,b)=> a-b);

// // descending order
// a.sort((a,b)=> b-a);

// console.log(a)




const arr = [10, 30, 50, [40, 90, 11], 80];

console.log(arr[3][0])
console.log(arr.flat(Infinity))