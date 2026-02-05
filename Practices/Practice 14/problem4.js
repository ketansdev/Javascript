// Write a function that returns a new object containing only those properties whose values are numbers greater than a given value n.

let data = {
  math: 80,
  eng: 45,
  sci: 90,
  city: "Mumbai",
  rank: 2
};

let n = 50;

const countNumValues = function(obj, n){
    let newObj = {};

    for(let key in obj){
        if(typeof obj[key] === "number" && obj[key] > n){
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

let result = countNumValues(data , n);
console.log(result);