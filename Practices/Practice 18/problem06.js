// Print All Prime Numbers from 1 to N

// function printPrimes(n) {
//   if (n <= 1) {
//     return false;
//   }
//   for (let num = 2; num <= n; num++) {
//     let isPrime = true; // assume prime

//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime) {
//       console.log(num);
//     }
//   }
// }

// printPrimes(10);

// function checkPrime(n){
//     if(n <= 1){
//         return false;
//     }

//     for(let num = 2; num <= n; num++){
//         let isPrime = true;

//         for(let i = 2; i < num; i++){
//             if(num % i === 0){
//                 isPrime = false;
//                 break;
//             }
//         }

//         if(isPrime){
//             console.log(num);
//         }
//     }
// }

// checkPrime(20);

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for(let i = 2; i < Number; i++){
    if(n % i === 0){
        return false;
    }
  }
  return true;
}

let result = isPrime(3);
console.log(result);