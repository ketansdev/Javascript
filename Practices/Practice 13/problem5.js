// Write a function that returns the key which has the maximum numeric value in an object.

let data = {
  math: 78,
  english: 85,
  science: 91,
  history: 69
};


const keyMaxVal = function(obj){
    let maxKey = "";
    let maxVal = -Infinity;
    for(let key in obj){
        if(obj[key] > minVal){
            maxKey = key;
            maxVal = obj[key];
        }
    }
    return maxKey;
}

let result = keyMaxVal(data);
console.log(result);