// Program 6: Check if Array is Sorted (Ascending)
// Task:

// Write a function called isSortedAscending that:
// Takes an array of numbers
// Returns true if the array is sorted in ascending order
// Otherwise returns false


const isSortedAscending = function(array){
    for(let i = 1; i < array.length; i++){
        if(array[i - 1] > [array[i]]){
            return false;     
        }
    }
    return true
    
}

const result = isSortedAscending([1, 2, 3, 4, 5,6, 7]);
console.log(result);