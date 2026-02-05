// Question 9 

// Problem:
// Create a function that returns a new object containing only boolean values from the given object.

let data = {
  name: "Rahul",
  age: 21,
  passed: true,
  verified: false,
  city: "Mumbai"
};

const checkBooleanValues = function(obj){
    let newObj = {};

    for(let key in obj){
        if(typeof obj[key] === "boolean"){
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

let result = checkBooleanValues(data);
console.log(result);

