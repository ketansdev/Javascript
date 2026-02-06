// Count how many properties have values that are either null OR undefined.

let data = {
  name: "Rahul",
  age: null,
  city: "Mumbai",
  score: undefined,
  passed: true,
  rank: null
};


const countProperties = function(obj){
    let count = 0;

    for(let key in obj){
        if(obj[key] === null || obj[key] === undefined){
            count++
        }
    }
    return count;
}

let result = countProperties(data);
console.log(result);