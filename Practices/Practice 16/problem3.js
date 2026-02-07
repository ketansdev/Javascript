// Create a new object where:

// If value is a number → keep it only if it is a prime number
// If value is a string → keep it only if its length is greater than 4
// Ignore all other types

let data = {
  age: 21,
  rank: 2,
  score: 17,
  city: "Goa",
  country: "India",
  name: "Rahul",
  passed: true
};

// const filterObject = function(obj){
//     let newObj = {};
//     for(let key in obj){
//         if(typeof obj[key] === "number"){
//             let isPrime = true;
//             if(obj[key] <= 1){
//                 isPrime = false;
//             }
//             else{
//                 for(let i = 2; i <= obj[key] / 2; i++){
//                     if(obj[key] % i !== 0){
//                         newObj[key] = obj[key];
//                         isPrime = false;
//                         break;
                        
//                     }
//                 }
//             }
//         }

//         if(typeof obj[key] === "string"){
//             newObj[key] = obj[key];
//         }
//     }
//     return newObj;
// }

// let result = filterObject(data);
// console.log(result);


const filterObject = function (obj) {
  let newObj = {};

  for (let key in obj) {
    let val = obj[key];

    // NUMBER → PRIME CHECK
    if (typeof val === "number") {
      if (val > 1) {
        let isPrime = true;

        for (let i = 2; i <= val / 2; i++) {
          if (val % i === 0) {
            isPrime = false;
            break;
          }
        }

        if (isPrime) {
          newObj[key] = val;
        }
      }
    }

    // STRING → LENGTH > 4
    else if (typeof val === "string" && val.length > 4) {
      newObj[key] = val;
    }
  }

  return newObj;
};
