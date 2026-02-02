// Question 2️⃣: Extract Only String Values
// Task

// Write a function extractStringValues(obj) that:
// Returns a new object containing only string values from the original object
// Keeps the key-value pairs intact

let data = {
  name: "Rahul",
  age: 21,
  city: "Mumbai",
  marks: 85,
  isStudent: true
};

const extractStringValues = function(obj){
    let newObj = {};

    for(let key in obj){
        if(typeof obj[key] === "string"){
            newObj[key] = obj[key];
        }
    }
    return newObj
}

let result = extractStringValues(data);
console.log(result);