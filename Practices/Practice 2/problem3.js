// Conditional Program 3: Largest of Two Numbers

// Task:
// Write a function called findGreater that:
// Takes two numbers

// Returns:

// "First is greater" if first number is bigger
// "Second is greater" if second number is bigger
// "Both are equal" if both numbers are same

// Example:
// findGreater(10, 5); // "First is greater"
// findGreater(3, 8);  // "Second is greater"
// findGreater(4, 4);  // "Both are equal"

function findGreater(num1, num2){
    if(num1 > num2){
        return "First is greater";
    }else if(num2 > num1){
        return "Second is greater";
    }else{
        return "Both are equal";
    }
}

console.log(findGreater(3, 3))