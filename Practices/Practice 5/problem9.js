// Array Practice – Question 9 (Optimized Thinking)
// Now let’s test your optimization skills.
// Program 9: Remove Duplicates from Array

// Task:
// Write a function removeDuplicates(arr) that:
// Returns a new array without duplicates
// Preserves original order

// Example
// removeDuplicates([1, 2, 2, 3, 1, 4])
// // [1, 2, 3, 4]

const removeDuplicates = function(arr){
    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        if(! newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let result = removeDuplicates([1, 2, 2, 3, 1, 4]);
console.log(result);