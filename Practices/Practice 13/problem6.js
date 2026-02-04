// Write a function that returns a new object where each numeric value is squared, while non-numeric values remain unchanged.

let data = {
  a: 2,
  b: "hello",
  c: 3,
  d: true,
  e: 4
};


const squareNumeric = function(obj){
    let newObj = {};

    for(let key in obj){
        if(typeof obj[key] === "number"){
            newObj[key] = obj[key] ** 2;
        }else{
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

let result = squareNumeric(data);
console.log(result);