// Program 3: Rotate Array Left by 1

// Task:

// Write a function rotateLeftByOne(arr) that:

// Moves first element to the end

// Shifts remaining elements left

// Example:
// rotateLeftByOne([1, 2, 3, 4])
// // [2, 3, 4, 1]

const rotateLeftByOne = function(arr){
    let newArr = [];

    for(let i = 1; i < arr.length; i++){
        newArr.push(arr[i]);
    }
    
    newArr.push(arr[0]);
    return newArr;
}

let result = rotateLeftByOne([1, 2, 3, 4]);
console.log(result);