// Question 7️⃣: Sum Nested Object Values
// Task

// Write a function sumNestedValues(student) that:
// Accepts the same student object
// Returns the sum of all numbers inside the nested marks object


let student = {
  name: "Rahul",
  marks: {
    math: 80,
    eng: 95,
    sci: 90
  },
  age: 21
};

const sumNestedValues = function(student){
    let sum = 0;
    for(let key in student){
        if(typeof student[key] === "object"){
            for(let innerKey in student[key]){
                if(typeof student[key][innerKey] === "number"){
                    sum += student[key][innerKey];
                }
            }
        }
    }
    return sum;
}

let result = sumNestedValues(student);
console.log(result);