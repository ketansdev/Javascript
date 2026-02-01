// Question 4: Check if Object is Empty


// Task

// Write a function isEmptyObject(obj) that:
// Returns true if object has no properties
// Otherwise returns false

let obj = {};

const isEmptyObject = function(obj){
    let count = 0;
    for(let key in obj){
        count++;
    }

    if(count > 0){
        return false;
    }else{
        return true;
    }
}

let result = isEmptyObject({ a: 1 });
console.log(result);