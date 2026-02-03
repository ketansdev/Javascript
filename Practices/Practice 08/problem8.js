// Question 8: Frequency Count of Values
// Task:

// Write a function that counts how many times each value appears in an array using an object.

// Example:
// countFrequency(["a", "b", "a", "c", "b", "a"]);

// Output:
// { a: 3, b: 2, c: 1 }


const countFrequency = function(arr){
    let obj = {};

    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]]){
            obj[arr[i]] += 1
        }else{
            obj[arr[i]] = 1
        }
    }
    return obj
}

let result = countFrequency(["a", "b", "a", "c", "b", "a"]);
console.log(result);