// Question 3
// Write a function that checks whether an object contains at least one string value.

// Requirements:

// The function should return true if any value in the object is a string.
// Otherwise, return false.
// Do not modify the original object.

let data = {
  name: "Rahul",
  age: 21,
  marks: 85,
  passed: true
};


const checkIfString = function(obj){

    for(let key in obj){
        if(typeof obj[key] === "string"){
            return true;
        }
    }
    return false;
}

let result = checkIfString(data);
console.log(result);