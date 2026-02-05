// Question 6

// Write a function that returns true if all numeric values in the object are even numbers, otherwise return false.

let data = {
  a: 2,
  b: 4,
  c: "hello",
  d: true,
  e: 6
};


const checkEvenNum = function(obj){
    for(let key in obj){
        if(typeof obj[key] === "number" && obj[key] % 2 !== 0){
            return false
        }
    }
    return true;
}

let result = checkEvenNum(data);
console.log(result);