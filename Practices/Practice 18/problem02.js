// Check if a Number is Palindrome

// A number is palindrome if it reads same forward and backward.

// function isPalindrome(num) {
//   let n = num;
//   let reverse = 0;

//   while (num > 0) {
//     let lastDigit = num % 10;
//     let removeLast = Math.floor(num / 10);
//     num = removeLast;

//     reverse = reverse * 10 + lastDigit;
//   }

//   if (reverse === n) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let result = isPalindrome(12321);
// console.log(result);



//  polished code

const isPallindrome = function(num){
    let original = num;
    let reverse = 0;

    while(num > 0){
        let lastDigit = num % 10;
        num = Math.floor(num / 10);

        reverse = reverse * 10 + lastDigit;
    }

    return reverse === original;
}

let result = isPallindrome(121);
console.log(result);