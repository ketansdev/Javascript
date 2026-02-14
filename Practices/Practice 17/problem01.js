// Task:
// Write a JavaScript program that takes one number as input (you can either hard‑code it in a variable or use prompt / process.argv for GitHub).

// Check if the number is:
// Positive → print "Positive"
// Negative → print "Negative"
// Zero → print "Zero"
// Then:

// If the number is positive, use a loop to print all numbers from 1 to that number (inclusive).
// If the number is negative, convert it to its absolute value and print numbers from 1 to that absolute value (inclusive).
// If the number is 0, just print "Zero" and don’t run any loop.
// Use only variables, conditionals (if/else), and loops (for or while). No arrays, objects, or functions yet.


const num = -8;

if(num > 0){
    console.log("Positive");
    for(let i = 1; i <= num ; i++){
        console.log(i);
    }
}else if(num < 0){
    console.log("Negative");
    const absNum = Math.abs(num);

    for(let i = 1; i <= absNum; i++){
        console.log(i);
    }
}else{
    console.log("Zero");
}

