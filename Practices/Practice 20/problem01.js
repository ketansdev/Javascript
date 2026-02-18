// Find the Element That Appears Maximum Times

// const findMaxElementAppearance = function (arr) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]] === undefined) {
//       obj[arr[i]] = 1;
//     } else {
//       obj[arr[i]] += 1;
//     }
//   }
//   //   return obj;
//   let max = -Infinity;
//   console.log(obj);
//   for (let key in obj) {
//     if (obj[key] > max) {
//       max = key;
//     }
//   }
//   return max;
// };

// let result = findMaxElementAppearance([2, 1, 2, 1, 2, 1, 3, 5, 6, 5]);
// console.log(result);



const findMaxElementAppearance = function(arr){
    let obj = {};
    let maxCount = 0;
    let maxElement = -1;

    for(let i = 0; i < arr.length; i++){
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;

        if(obj[arr[i]] > maxCount){
            maxCount = obj[arr[i]];
            maxElement = arr[i];
        }
    }
    return maxElement;
}

let result = findMaxElementAppearance([2,1, 2, 2, 3, 1, 1]);
console.log(result);