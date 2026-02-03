// Program 10: Move All Zeros to End
// Task:

// Write a function called moveZerosToEnd that:
// Takes an array of numbers
// Moves all 0s to the end
// Maintains the order of non-zero elements

// Example:
// moveZerosToEnd([0, 1, 0, 3, 12]) → [1, 3, 12, 0, 0]

const moveZerosToEnd = function(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] !== 0){
            newArray.push(array[i]);
        }
    }

    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            newArray.push(array[i]);
        }
    }

    return newArray;
}

let result = moveZerosToEnd([0, 1, 0, 3, 12]);
console.log(result);