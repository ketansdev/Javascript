// Program 5: Find Second Largest Element
// Task:

// Write a function called findSecondLargest that:
// Takes an array of numbers
// Returns the second largest number
// Do NOT sort the array
// Use for loop only

// Example:
// findSecondLargest([10, 5, 20, 8]) → 10

const findSecondLargest = function(array){
    let largest = -Infinity;
    let secondLargest = -Infinity;
   

    for(let i = 0; i < array.length; i ++){
        if(array[i] > largest){
            secondLargest = largest;
            largest = array[i];
        }
        else if(array[i] > secondLargest && array[i] < largest){
            secondLargest = array[i];
        }
    }

    return secondLargest;

}

let result = findSecondLargest(([10, 5, 20, 8]))
console.log(result);