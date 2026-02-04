// Write a function that returns the sum of all numeric values present in an object.

let data = {
  name: "Rahul",
  age: 22,
  marks: 78,
  city: "Mumbai",
  bonus: 10,
  passed: true
};

const calculateSum = function(obj){
    let sum = 0;

    for(let key in obj){
        if(typeof obj[key] === "number"){
            sum += obj[key];
        }
    }
    return sum;
}

let result = calculateSum(data);
console.log(result);