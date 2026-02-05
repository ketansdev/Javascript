// Question 4

// Write a function called countKeyLengthGreaterThan that:
// Takes an object and a number n
// Counts how many keys in the object have a length greater than n
// Returns that count

let data = {
  name: "Rahul",
  age: 21,
  city: "Mumbai",
  isStudent: true
};

const countKeyLengthGreaterThan = function(obj, n){
    let count = 0;
    for(let key in obj){
        if(key.length > n){
            count++;
        }
    }
    return count;
}

let result = countKeyLengthGreaterThan(data, 3);
console.log(result);