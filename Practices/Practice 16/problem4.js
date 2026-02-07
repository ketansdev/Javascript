// Create a new object where:

// If value is a number → include it only if it is divisible by both 3 and 5
// If value is a string → include it only if it ends with "a"
// Ignore all other values

let data = {
  score: 45,
  age: 21,
  bonus: 30,
  city: "Goa",
  country: "India",
  name: "Rahul",
  passed: true
};

const filterObject = function(obj){
    let newObj ={};

    for(let key in obj){
        if(typeof obj[key] === "number" && obj[key] % 3 === 0 && obj[key] % 5 === 0){
            newObj[key] = obj[key];
        }else if(typeof obj[key] === "string" && obj[key].endsWith("a")){
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

let result = filterObject(data);
console.log(result);