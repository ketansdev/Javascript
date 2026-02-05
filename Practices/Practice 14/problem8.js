// Write a function that returns the key name whose value is the longest string.

let data = {
  name: "Rahul",
  city: "Mumbai",
  country: "India",
  company: "OpenAI",
  role: "Dev"
};


const checkLongestStrValue = function(obj){
    let maxLength  = -Infinity;
    let longestStr
    for(let key in obj){
        if(typeof obj[key] === "string" && obj[key].length > maxLength ){
            maxLength = obj[key].length;
            longestStr = key;
        }
    }
    return longestStr;
}

let result = checkLongestStrValue(data);
console.log(result);