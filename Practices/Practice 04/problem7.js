// Program 7: Remove Duplicates from Array
// Task:

// Write a function called removeDuplicates that:
// Takes an array
// Returns a new array without duplicates
// Use for loop only
// No Set

// Example:
// removeDuplicates([1, 2, 2, 3, 1, 4])
// → [1, 2, 3, 4]

const removeDuplicates = function(array){
    let newArray = [];

    for(let i = 0; i < array.length; i++){
        console.log(newArray.includes(array[i]));
        if(! newArray.includes(array[i])){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let result = removeDuplicates([1, 2, 2, 3, 1, 4]);
console.log(result);