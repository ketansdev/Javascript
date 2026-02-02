// Question 4️⃣: Remove Boolean Properties
// Task

// Write a function removeBooleanProperties(obj) that:
// Returns a new object
// Removes all properties with boolean values
// Keeps all other key-value pairs intact

let data = {
  name: "Rahul",
  age: 21,
  city: "Mumbai",
  marks: 85,
  isStudent: true,
  verified: false
};

const removeBooleanProperties = function(obj){
    let newObj = {};

    for(let key in obj){
        if(typeof obj[key] !== "boolean"){
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

let result = removeBooleanProperties(data);
console.log(result);