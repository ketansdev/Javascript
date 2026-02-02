// Question 10️⃣: Extract Only Number Properties (Nested)
// Task

// Write a function extractNestedNumbers(obj) that:
// Returns a new object
// Keeps only number values from nested objects
// Keeps structure intact

let student = {
  name: "Rahul",
  marks: {
    math: 80,
    eng: 95,
    sci: 90
  },
  age: 21,
  city: "Mumbai"
};


const extractNestedNumbers = function(obj){
    let newObj = {};

    for(let key in obj){
        if(typeof obj[key] === "number"){
            newObj[key] = obj[key];
        }

        if(typeof obj[key] === "object"){
            let nestedObj = {}
            for(let innerKey in obj[key]){
                if(typeof obj[key][innerKey] === "number"){
                    nestedObj[innerKey] = obj[key][innerKey];
                }
            }
            if(Object.keys(nestedObj).length >0){
                newObj[key] = nestedObj;
            }
        }
    }
    return newObj;
}

let result = extractNestedNumbers(student);
console.log(result);