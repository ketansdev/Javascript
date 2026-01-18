// Conditional Program 7: Check Divisibility

// Task:
// Write a function called checkDivisibility that:
// Takes a number

// Returns:

// "Divisible by 3 and 5" if divisible by both
// "Divisible by 3" if only divisible by 3
// "Divisible by 5" if only divisible by 5
// "Not divisible by 3 or 5" otherwise

// Example:
// checkDivisibility(15); // "Divisible by 3 and 5"
// checkDivisibility(9);  // "Divisible by 3"
// checkDivisibility(10); // "Divisible by 5"
// checkDivisibility(7);  // "Not divisible by 3 or 5"


function checkDivisibility(num){
    if(num % 3 === 0 && num % 5 ===0){
        return "Divisible by 3 and 5";
    }else if(num % 3 === 0){
        return "Divisible by 3";
    }else if(num % 5 === 0){
        return "Divisible by 5";
    }else{
        return "Not divisible by 3 or 5";
    }
}

console.log(checkDivisibility(7))