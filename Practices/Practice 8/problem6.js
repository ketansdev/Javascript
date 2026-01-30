// Question 6: Find Property With Maximum Value
// Task:

// Write a function that returns the key name which has the highest value.

// Example:
// findTopper({ math: 80, eng: 95, sci: 90 });

// Output:
// "eng"

const findTopper = function(obj){
    let highest = 0;
    let property = "";
    for(let key in obj){
        if(obj[key] > highest){
            property = key;
            highest = obj[key];
        }
    }
    return property;
}

let result = findTopper({ math: 80, eng: 95, sci: 90 });
console.log(result)