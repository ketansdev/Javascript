// Move All Zeros to End


const moveAllZerosToEnd = function(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
          arr.splice(i, 1);
          arr.push(0);
        }
    }
    return arr;
}

let result = moveAllZerosToEnd([0, 1, 0, 3, 12]);
console.log(result);