// Program 1: Count Object Properties
// Task:

// Write a function called countProperties that:
// Takes an object as input
// Counts how many properties (keys) it has
// Returns the count

// Example:
// countProperties({
//     name: "Rahul",
//     age: 21,
//     city: "Mumbai"
// });

// Output:
// 3


const countProperties = function(obj){
    let count = 0;
    for(let key in obj){
        count ++
    }
    return count;
}

let result = countProperties({
    name: "Rahul",
    age: 21,
    city: "Mumbai"
});

console.log(result);