// Write a function that returns a new object where keys and values are swapped.

// Rules

// Convert values to strings if needed
// Assume values are unique

let data = {
  a: 1,
  b: 2,
  c: 3
};

const swapKeyVal = function(obj){
    let objKey = null;
    let objVal = null;
    let newObj = {};

    for(let key in obj){
        objKey = obj[key];
        objVal = key;

        newObj[objKey] = objVal;
    }

    return newObj;
}

let result = swapKeyVal(data);
console.log(result);