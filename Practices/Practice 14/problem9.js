// Question 9

// Write a function that returns a new object where string values are reversed, and all other values remain unchanged.

let data = {
  name: "Rahul",
  city: "Mumbai",
  age: 21,
  passed: true
};

const reverseStrValues = function(obj){
    let reverseStr = "";
    let newObj = {...obj};

    for(let key in obj){
        if(typeof obj[key] === "string"){
            reverseStr = "";
            for(let i = obj[key].length-1 ; i >= 0; i--){
                reverseStr += obj[key][i] + " ";
            }
            newObj[key] = reverseStr.trim();
        }
    }
    return newObj;
}

let result = reverseStrValues(data);
console.log(result);