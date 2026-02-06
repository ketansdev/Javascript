// Count properties whose value is a string AND length is even

let data = {
  name: "Rahul",
  city: "Mumbai",
  role: "Dev",
  country: "India",
  company: "OpenAI",
  age: 21
};


const countProperties = function(obj){
    let count = 0;
    for(let key in obj){
        if(typeof obj[key] === "string" && obj[key].length % 2 === 0){
            console.log(obj[key]);
            count ++;
        }
    }
    return count;
}

let result = countProperties(data);
console.log(result);