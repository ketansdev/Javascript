// Question 5

// Write a function that counts how many properties have values that are falsy.

// Falsy values in JavaScript: false, 0, "", null, undefined, NaN

let data = {
  name: "",
  age: 0,
  city: "Mumbai",
  passed: false,
  score: undefined,
  rank: null
};

const countFalsyProperties = function(obj){
    let count = 0;

    for(let key in obj){
        if(!obj[key]){
            count++;
        }
    }
    return count;
}

let result = countFalsyProperties(data);
console.log(result);