// Question 3️⃣: Sum Only Number Values
// Task

// Write a function sumNumberValues(obj) that:
// Sums all number-type values in an object
// Returns the sum

let data = {
  name: "Rahul",
  age: 21,
  city: "Mumbai",
  marks: 85,
  isStudent: true
};

const sumNumberValues = function(obj){
    let sum = 0;

    for(let key in obj){
        if(typeof obj[key] === "number"){
            sum += obj[key];
        }
    }
    return sum;
}

let result = sumNumberValues(data);
console.log(result);