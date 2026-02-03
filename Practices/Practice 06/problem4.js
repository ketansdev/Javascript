// Program 4: Rotate Array Right by 1

// Task:

// Write a function rotateRightByOne(arr) that:
// Moves last element to the front
// Shifts remaining elements right

// Example:
// rotateRightByOne([1, 2, 3, 4])
// // [4, 1, 2, 3]


const rotateRightByOne = function(arr){
    let newArr = [];
    newArr.push(arr[arr.length - 1]);

    for(let i = 0; i < arr.length - 1; i++){
        newArr.push(arr[i]);
    }
    return newArr;
}

let result = rotateRightByOne([1, 2, 3, 4]);
console.log(result)