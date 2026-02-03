// Array Practice – Question 4
// Program 4: Count Even Numbers in an Array

// Task:
// Write a function countEven(arr) that:
// Returns how many even numbers are present
// If array is empty → return 0

// Example
// countEven([1, 2, 3, 4, 6]) // 3
// countEven([])             // 0

const countEven = function(arr){
    if(arr.length === 0){
        return 0;
    }
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            count++
        }
    }
    return count;
}

let result = countEven([1, 2, 3, 4, 6]);
console.log(result);

