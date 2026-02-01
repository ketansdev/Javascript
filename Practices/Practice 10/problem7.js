// Question 7

// Write a function that returns a new object containing only number-type properties from the input object.

let object = {
  name: "Rahul",
  age: 21,
  marks: 85,
  city: "Mumbai",
  passed: true
};

const numberObject = function(obj){
    let newObj = {};
    for(let key in obj){
        console.log(typeof obj[key]);
        if(typeof obj[key] === "number"){
            newObj[key] = obj[key];
        }
    }
    return newObj;

}

let result = numberObject(object);
console.log(result);