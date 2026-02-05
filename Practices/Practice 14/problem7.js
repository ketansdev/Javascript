// Question 7

// Write a function that returns a new object containing only those properties whose values are strings AND have length greater than 3.

let data = {
  name: "Rahul",
  city: "Goa",
  country: "India",
  role: "Dev",
  company: "OpenAI",
  age: 21
};


const filterStringProperties = function(obj){
    let newObj = {};

    for(let key in obj){
        if(typeof obj[key] === "string" && obj[key].length > 3){
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

let result = filterStringProperties(data);
console.log(result);