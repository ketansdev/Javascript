
// Count Frequency of Each Element

const frequency = function(arr){
    let obj = {};

    for(let i = 0; i < arr.length; i++){
        if(! obj[arr[i]]){
            obj[arr[i]] = 1;
        }else{
            obj[arr[i]] += 1;
        }
    }
    return obj;
}

let result = frequency([0, 0, 1])
console.log(result);