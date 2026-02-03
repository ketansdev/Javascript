// Conditional Program 6: Check Leap Year

// Task:
// Write a function called isLeapYear that:
// Takes a year as input

// Returns:

// "Leap Year" if:
// year is divisible by 400
// OR divisible by 4 and not divisible by 100
// "Not a Leap Year" otherwise

// Example:
// isLeapYear(2020); // "Leap Year"
// isLeapYear(1900); // "Not a Leap Year"
// isLeapYear(2000); // "Leap Year"


function isLeapYear(year){
    if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
        return "Leap Year";
    }else{
        return "Not a Leap Year";
    }
}

console.log(isLeapYear(1900));