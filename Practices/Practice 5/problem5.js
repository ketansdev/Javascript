// Program 5: Count Positive Numbers

// Task:
// Write a function countPositive(arr) that:
// Counts numbers greater than 0
// Ignores 0 and negative numbers
// If array is empty → return 0

// Example
// countPositive([1, -2, 3, 0, -5, 6]) // 3
// countPositive([])                  // 0

const countPositive = function(arr){
    if(arr.length === 0){
        return 0;
    }

    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            count++
        }
    }
    return count;
}

let result = countPositive([1, -2, 3, 0, -5, 6, 7]);
console.log(result);