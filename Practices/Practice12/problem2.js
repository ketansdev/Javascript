// Question 2

// Write a function called countFalsyValues that:
// Takes an object as input
// Counts how many falsy values it contains
// Returns the count

// Falsy values in JavaScript include:
// false, 0, "", null, undefined, NaN


let data = {
  name: "Rahul",
  age: 0,
  city: "",
  marks: 85,
  passed: false,
  rank: null
};


const countFalsyValues = function(obj){
    let count = 0;

    for(let key in obj){
        if(! obj[key]){
            count ++;
        }
    }
    return count;
}

let result = countFalsyValues(data);
console.log(result);