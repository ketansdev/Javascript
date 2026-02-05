// Question 6: Count String Values
// Problem

// Write a function that counts how many string values are present in an object.


let data = {
  name: "Rahul",
  age: 21,
  city: "Mumbai",
  country: "India",
  passed: true
};

const countStringValues = function(obj){
    let count = 0;
    for(let key in obj){
        if(typeof obj[key] === "string"){
            count++;
        }
    }
    return count;
}

let result = countStringValues(data);
console.log(result);