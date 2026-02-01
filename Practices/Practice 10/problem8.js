// Question 8

// Write a function that counts how many boolean values are present in an object.

// Example input:

let obj = {
  name: "Rahul",
  isStudent: true,
  passed: false,
  age: 21,
  verified: true
};

const countBoolean = function(obj){
    let count = 0;

    for(let key in obj){
        if(typeof obj[key] === "boolean"){
            count++;
        }
    }
    return count;
}

let result = countBoolean(obj);
console.log(result);