// Array Practice – Question 2
// Program 2: Find Maximum Element in an Array

// Task:
// Write a function findMax(arr) that:
// Takes an array of numbers
// Returns the largest number
// If array is empty → return "Array is empty"

// Example:
// findMax([3, 7, 2, 9, 1]) // 9
// findMax([])             // "Array is empty"

const findMax = function(arr){
    let max = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}

let result = findMax([3, 7, 2, 9, 1]);
console.log(result);