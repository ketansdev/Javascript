// Problem

// Write a function that returns a new object where:

// Only number values are kept
// If a number is odd, convert it to even by adding 1
// Ignore non-number values completely

let data = {
  a: 3,
  b: 10,
  c: "hello",
  d: 7,
  e: true,
  f: 8
};

const filterObject = function(obj){
    let newObj = {};

    for(let key in obj){
        if(typeof obj[key] === "number"){
            if(obj[key] % 2 !== 0){
                newObj[key] = obj[key] + 1;
            }else{
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}

let result = filterObject(data);
console.log(result);