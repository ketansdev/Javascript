// Program 10: Move All Zeros to End

// Task:
// Write a function moveZerosToEnd(arr) that:
// Moves all 0s to the end
// Maintains order of non-zero elements
// Returns a new array

// Example
// moveZerosToEnd([0, 1, 0, 3, 12])
// // [1, 3, 12, 0, 0]

const moveZerosToEnd = function(arr){
    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            newArr.push(arr[i]);
        }
    }

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

let result = moveZerosToEnd([0, 1, 0, 3, 12]);
console.log(result);

