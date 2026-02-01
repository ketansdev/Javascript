// Question 5: Count Only String Values


// Task

// Write a function countStringValues(obj) that:
// Counts how many values are strings
// Returns the count

let data = {
  name: "Rahul",
  age: 21,
  city: "Mumbai",
  isStudent: true
};

const countStringValues = function(obj){
    let count = 0;
    for(let key in obj){
        if(typeof obj[key] === "string"){
            count++
        }
    }
    return count
}

let result = countStringValues(data);
console.log(result);