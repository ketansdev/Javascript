// Create a new object containing only properties whose VALUE type is number and value is between 10 and 100 (inclusive).

let data = {
  age: 21,
  score: 9,
  rank: 2,
  marks: 85,
  bonus: 150,
  name: "Rahul",
  passed: true
};

const filterObject = function(obj){
    let newObj = {};

    for(let key in obj){
        if(typeof obj[key] === "number" && obj[key] >= 10 && obj[key] <= 100){
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

let result = filterObject(data);
console.log(result);