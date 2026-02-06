// Create a new object where:

// If the value is a number, multiply it by 2
// If the value is a string, reverse the string
// Leave all other values unchanged

let data = {
  name: "Rahul",
  age: 21,
  city: "Mumbai",
  passed: true,
  score: null
};


const filterObject = function(obj){
    let newObj = {};

    for(let key in obj){
        if(typeof obj[key] === "number"){
            newObj[key] = obj[key] * 2;
        }else if(typeof obj[key] === "string"){
            console.log("reverse");
            let reverseStr = "";
            let str = obj[key];
            for(let i = str.length -1; i >= 0; i--){
                reverseStr += str[i];
            }
            newObj[key] = reverseStr;
        }else{
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

let result = filterObject(data);
console.log(result);