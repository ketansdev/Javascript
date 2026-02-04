// Write a function that counts how many values are undefined in an object.

let data = {
  name: "Rahul",
  age: undefined,
  city: "Mumbai",
  score: undefined,
  passed: true
};


const countUndefined = function(obj){
    let count = 0;
console.log(typeof undefined)
    for(let key in obj){
        if(typeof obj[key] === "undefined"){
            count ++;
        }
    }
    return count;
}

let result = countUndefined(data);
console.log(result);