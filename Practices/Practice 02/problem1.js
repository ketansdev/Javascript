// Program 1: Positive, Negative or Zero

// Task:
// Write a function called checkNumber that:
// Takes a number

// Returns:

// "Positive" if number > 0
// "Negative" if number < 0
// "Zero" if number === 0

// Example:
// checkNumber(5);   // "Positive"
// checkNumber(-3);  // "Negative"
// checkNumber(0);   // "Zero"



function checkNumber(num){
    if(num > 0){
        return "Positive";
    }else if(num < 0){
        return "Negative";
    }else{
        return "Zero";
    }
}

console.log(checkNumber(0))