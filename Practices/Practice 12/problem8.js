// Question 8 

// Problem:
// Write a function that returns true if all values in the object are truthy, otherwise return false.

let data = {
  name: "Rahul",
  age: 21,
  city: "Mumbai",
  passed: true
};

const checkTruthy = function(obj){
    for(let key in obj){
        if(! obj[key]){
            return false;
        }
    }
    return true;
}

let result = checkTruthy(data);
console.log(result);