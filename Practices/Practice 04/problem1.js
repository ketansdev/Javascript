// Program 1: Find Largest Element in Array
// Task:
// Write a function called findLargest that:
// Takes an array of numbers
// Returns the largest number from the array

// Example:
// findLargest([3, 7, 2, 9, 1]) → 9
// findLargest([10, 5, 8]) → 10

const findLargest = function(array){
    let largest = arr[0];
    for(let i = 1; i < array.length; i++){
        if(array[i] > largest){
            largest = array[i];
        }
    }
    return largest;
}

console.log(findLargest([3, 7, 2, 9, 11]));
