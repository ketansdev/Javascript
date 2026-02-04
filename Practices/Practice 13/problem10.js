// Write a function that returns true if an object is a subset of another object, otherwise return false.

// Rules

// Every key–value pair in obj2 must exist in obj1
// Exact match required

let obj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

let obj2 = {
  a: 1,
  c: 3
};

const checkSubset = function(obj1, obj2){
    for(let key in obj2){
        if(!(key in obj1) && obj2[key]  !== obj1[key]){
            return false;
        }
    }
    return true
    
}

let result = checkSubset(obj1, obj2);
console.log(result);