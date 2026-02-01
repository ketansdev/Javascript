// Question 16: Convert Object Values to Uppercase


// Task

// Write a function convertStringsToUpper(obj) that:
// Converts only string values to uppercase
// Leaves non-string values unchanged
// Returns a new object (do NOT modify the original)

let student = {
  name: "rahul",
  city: "mumbai",
  age: 21
};

const convertStringsToUpper = function(obj){
    let newObj = {...obj};
    for(let key in newObj){
        if(typeof newObj[key] === "string"){
            newObj[key] = newObj[key].toUpperCase();
        }
    }
    console.log(obj);

    return newObj;
}

let result = convertStringsToUpper(student);
console.log(result);