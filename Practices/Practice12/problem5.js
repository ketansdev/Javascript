// Question 5: Count Values Greater Than a Given Number
// Problem

// Write a function that counts how many numeric values in an object are greater than a given number n.

// Rules

// Ignore non-number values
// Only count values of type "number"
// Return the final count

let data = {
  name: "Rahul",
  age: 21,
  marks: 85,
  city: "Mumbai",
  rank: 2,
  passed: true
};


const countValuesGreaterThan = function(obj, n){
    let count = 0;

    for(let key in obj){
        if(typeof obj[key] === "number" &&  obj[key] > n){
            count++;
        }
    }
    return count;
}

let result = countValuesGreaterThan(data, 20);
console.log(result);