// Program 8: Find Frequency of Elements
// Task:

// Write a function called countFrequency that:
// Takes an array
// Returns an object with frequency of each element

// Example:
// countFrequency(["a", "b", "a", "c", "b", "a"])
// → { a: 3, b: 2, c: 1 }

const countFrequency = function(array){
    let obj = {};

    for(let i = 0; i < array.length; i++){
        if(array[i] in obj){
            obj[array[i]] += 1;
        }else{
            obj[array[i]] = 1;
        }
    }
    return obj;
}

let result = countFrequency(["a", "b", "a", "c", "b", "a"]);
console.log(result);