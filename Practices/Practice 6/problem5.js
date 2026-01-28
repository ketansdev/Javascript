// Array Practice — Question 5 (Very Important)
// Rotate Array by K steps (Left Rotation)

// Task:

// Write a function rotateLeftByK(arr, k) that:
// Rotates array left by k positions
// k can be greater than array length

// Example:
// rotateLeftByK([1, 2, 3, 4, 5], 2)
// // [3, 4, 5, 1, 2]

// rotateLeftByK([1, 2, 3, 4, 5], 7)
// // [3, 4, 5, 1, 2]


const rotateLeftByK = function(arr, k){
    let newArr = [];
    if(k > arr.length){
        k = k % arr.length;
    }

    for(let i = k; i < arr.length; i++){
        newArr.push(arr[i]);
    }

    for(let i = 0; i < k; i++){
        newArr.push(arr[i]);
    }

    return newArr
}

let result = rotateLeftByK([1, 2, 3, 4, 5], 7);
console.log(result);