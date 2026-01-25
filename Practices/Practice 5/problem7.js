// Program 7: Check if Array is Sorted (Ascending)

// Task:
// Write a function isSortedAscending(arr) that:
// Returns true if array is strictly ascending
// Else returns false
// Empty or single-element array → true

// Example
// isSortedAscending([1, 2, 3, 4, 5]) // true
// isSortedAscending([1, 3, 2])      // false
// isSortedAscending([5])            // true

const isSortedAscending = function(arr){
    if(arr.length === 0 || arr.length === 1){
        return true;
    }

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i - 1]){
            return false;
        }
    }
    return true
}

let result = isSortedAscending([1, 3, 2]);
console.log(result);