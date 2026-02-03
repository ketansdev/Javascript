// Program 1: Find Sum of Array Elements

// Task:
// Write a function sumArray(arr) that:
// Takes an array of numbers
// Returns the sum of all elements
// If array is empty → return 0

// Example:
// sumArray([1, 2, 3, 4]) // 10
// sumArray([])          // 0

const sumArray = function(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

let result = sumArray([1, 2, 3, 4]);
console.log(result);