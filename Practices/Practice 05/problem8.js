// Count Frequency of Elements

// Task:
// Write a function countFrequency(arr) that:
// Takes an array
// Returns an object
// Keys → elements
// Values → count of occurrences

// Example
// countFrequency(["a", "b", "a", "c", "b", "a"])

const countFrequency = function(arr){
    let obj = {};

    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]]){
            obj[arr[i]] += 1;
        }else{
            obj[arr[i]] = 1;
        }
    }
    return obj;
}

let result = countFrequency(["a", "b", "a", "c", "b", "a"]);
console.log(result);