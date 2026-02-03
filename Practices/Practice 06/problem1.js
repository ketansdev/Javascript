// Program 1: Find Common Elements of Two Arrays

// Task:
// Write a function findCommonElements(arr1, arr2) that:
// Returns a new array of common elements
// No duplicates in result

// Example
// findCommonElements([1, 2, 3, 4], [3, 4, 5])
// // [3, 4]


const findCommonElements = function(arr1, arr2){
    let newArr = [];

    for(let i = 0; i < arr1.length; i++){
        if(arr2.includes(arr1[i]) && ! newArr.includes(arr1[i])){
            newArr.push(arr1[i]);
        }
    }
    return newArr;
}

let result = findCommonElements([1, 2, 2, 3, 4], [3, 4, 5]);
console.log(result);