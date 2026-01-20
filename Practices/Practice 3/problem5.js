// Loop Program 5: Reverse a Number

// Task:
// Write a function reverseNumber(n) that:
// Takes a number n
// Returns the reversed number

// Example:
// reverseNumber(1234); // 4321

function reverseNumber(n){
    let reverse = 0;

    for(; n > 0; n = Math.floor(n/10)){
        let digit = n % 10;
        console.log("digit",digit);
        reverse = reverse * 10 + digit;
        console.log(reverse)
    }

    return reverse
}

reverseNumber(1234);