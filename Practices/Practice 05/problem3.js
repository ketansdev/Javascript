// Array Practice – Question 3
// Program 3: Find Minimum Element in an Array

// Task:
// Write a function findMin(arr) that:
// Returns the smallest number
// If array is empty → "Array is empty"

// Example
// findMin([5, 2, 8, 1, 4]) // 1
// findMin([])             // "Array is empty"


const findMin = function(arr){
    if(arr.length === 0){
        return "Array is empty";
    }

    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

let result = findMin([5, 2, 8, 1, 4]);
console.log(result);