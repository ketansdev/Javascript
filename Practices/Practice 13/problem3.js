// Write a function that returns a new object containing only the key–value pairs where the value is a string AND its length is greater than 4.

let data = {
  name: "Rahul",
  city: "Mumbai",
  country: "India",
  role: "Dev",
  company: "OpenAI"
};

const returnObj = function(obj){
    let newObj = {};

    for(let key in obj){
        if(typeof obj[key] === "string"  && obj[key].length > 4){
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

let result = returnObj(data);
console.log(result);