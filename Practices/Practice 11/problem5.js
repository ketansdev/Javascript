// Question 5️⃣: Merge Two Objects
// Task

// Write a function mergeObjects(obj1, obj2) that:
// Returns a new object
// Combines all key-value pairs from both objects
// If keys are the same, values from obj2 overwrite obj1

let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { b: 20, d: 4 };

const mergeObjects = function(obj1, obj2){
    let newObj = {};

    for(let key in obj1){
        newObj[key] = obj1[key];
    }

    for(let key in obj2){
        newObj[key] = obj2[key];
    }

    return newObj;
}

let result = mergeObjects(obj1, obj2);
console.log(result);