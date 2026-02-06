// Question 1

// Problem:
// Write a function that counts how many properties in an object have values of type object,
// but do NOT count:

// arrays
// null

let data = {
  name: "Rahul",
  marks: { math: 80, sci: 90 },
  skills: ["JS", "React"],
  address: { city: "Mumbai", pin: 400001 },
  age: 21,
  extra: null
};

const countObjectProperties = function(obj){
    let count = 0;

    for(let key in obj){
        if(typeof obj[key] === "object" && obj[key] !== null && ! Array.isArray(obj[key])){
            count++;
        }
    }
    return count;
}

let result = countObjectProperties(data);
console.log(result);