// Program 2: Sum of Object Values

// Write a function:
// function sumValues(obj)

// Task:

// Object contains only numbers
// Return the sum of all values
// Example:
// sumValues({ a: 10, b: 20, c: 30 });

// Output:
// 60

const sumValues = function(obj){
    let sum = 0;

    for(let key in obj){
        sum += obj[key];
    }
    return sum;
}

let result = sumValues({ a: 10, b: 20, c: 30 });
console.log(result);