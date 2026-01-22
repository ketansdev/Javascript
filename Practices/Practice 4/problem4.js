// Program 4: Reverse an Array
// Task:

// Write a function called reverseArray that:
// Takes an array
// Returns a new array reversed
// Do NOT use reverse() method

// Example:
// reverseArray([1, 2, 3, 4]) → [4, 3, 2, 1]


const reverseArray = function(array){
    let reverseArray = [];

    for(let i = array.length - 1; i >= 0 ; i--){
        reverseArray.push(array[i]);
    }
    return reverseArray;
}

const result = reverseArray([1, 2, 3, 4]);
console.log(result);