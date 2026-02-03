// Program 9: Find Common Elements in Two Arrays
// Task:

// Write a function called findCommonElements that:
// Takes two arrays
// Returns a new array containing elements that are present in both arrays
// No duplicates in result

// Example:
// findCommonElements([1, 2, 3], [2, 3, 4]) → [2, 3]
// findCommonElements(["a", "b"], ["b", "c"]) → ["b"]

const findCommonElements = function(array1, array2){
    let newArray = [];

    for(let i = 0; i < array1.length; i++){
        if(array2.includes(array1[i]) && ! newArray.includes(array1[i])){
            newArray.push(array1[i]);
        }
    }
    return newArray;
}

let result = findCommonElements([1, 2, 2, 3], [2, 3]);
console.log(result);