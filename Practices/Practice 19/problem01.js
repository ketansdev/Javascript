// Find the Largest Number in an Array (Without Math.max)


const findLargest = function(arr){
    let max = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    return max;
}

let result = findLargest([4, 7, 1, 9, 3]);
console.log(result);