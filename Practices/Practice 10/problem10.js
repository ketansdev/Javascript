// Write a function that removes all properties whose value is null or undefined and returns a new object.


let obj = { a: 10, b: null, c: undefined, d: 20 };

const removeNullAndUndefined = function(obj){
    let newObj = {};

    for(let key in obj){
        // console.log(obj[key] === undefined)
        if(obj[key] !== null && obj[key] !== undefined){
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

let result = removeNullAndUndefined(obj);
console.log(result);