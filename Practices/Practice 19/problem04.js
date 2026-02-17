// Find First Non-Repeating Element

const nonRepeat = function (arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if(obj[arr[i]] === undefined){
        obj[arr[i]] = 1;
    }else{
        obj[arr[i]] += 1;
    }
  }

  console.log(obj)
  for(let i = 0; i < arr.length; i++){
    if(obj[arr[i]] === 1){
        return arr[i];
    }
  }
};

let result = nonRepeat([1, 2, 2, 3, 1, 3, 4, 4, 0]);
console.log(result);
