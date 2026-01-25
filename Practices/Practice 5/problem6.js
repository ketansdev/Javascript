// Program 6: Find Second Largest Element

// Task:
// Write a function findSecondLargest(arr) that:
// Returns the second largest number
// Assume array has at least 2 elements
// Do NOT sort the array

// Example
// findSecondLargest([10, 5, 20, 8]) // 10
// findSecondLargest([3, 7, 2, 9, 1]) // 7


const findSecondLargest = function(arr){
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        else if(arr[i] > secondLargest && arr[i] < firstLargest){
            secondLargest = arr[i];
        }

    }
    return secondLargest;
}

let result = findSecondLargest([10, 5, 20, 8]);
console.log(result);