// Task:

// Write a function that merges two objects into a new object.

// Example:
// mergeObjects({a: 1, b: 2}, {b: 3, c: 4});

// Output:
// { a: 1, b: 3, c: 4 }


const mergeObjects = function(obj1, obj2){
    let obj = {};

    for(let key in obj1){
        obj[key] = obj1[key];
    }

    for(let key in obj2){
        obj[key] = obj2[key];
    }
    return obj;
}

let result = mergeObjects({a: 1, b: 2}, {b: 3, c: 4});
console.log(result);