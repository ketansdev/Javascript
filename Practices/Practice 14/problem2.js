// Write a function that counts how many properties have values which are arrays.

// Rules

// Only count values that are arrays
// Ignore objects, null, strings, numbers, etc.
// Return the count

let data = {
  name: "Rahul",
  scores: [80, 90, 85],
  skills: ["JS", "React"],
  marks: { math: 80 },
  age: 21,
  extra: null
};

const countArrayValues = function(obj){
    let count = 0;

    for(let key in obj){
       
        if(Array.isArray(obj[key])){
            count++;
        }
    }
    return count;
}

let result = countArrayValues(data);
console.log(result);