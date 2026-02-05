// Write a function that returns an array of keys whose values are objects (excluding arrays and null).

let data = {
  name: "Rahul",
  marks: { math: 80, sci: 90 },
  skills: ["JS", "React"],
  address: { city: "Mumbai" },
  age: 21,
  extra: null
};

const checkObjectValue = function(obj){
    let arr = [];

    for(let key in obj){
        if(typeof obj[key] === "object" && ! Array.isArray(obj[key]) && obj[key] !== null){
            arr.push(key);
        }
    }
    return arr;
}

let result = checkObjectValue(data);
console.log(result);
