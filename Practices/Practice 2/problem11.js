// Conditional Program 11: Simple Calculator

// Task:
// Write a function called simpleCalculator that:
// Takes three arguments:
// number1
// number2
// operator ("+", "-", "*", "/")

// Returns the result based on the operator
// If operator is invalid → return "Invalid operator"

// Example:
// simpleCalculator(10, 5, "+"); // 15
// simpleCalculator(10, 5, "/"); // 2
// simpleCalculator(10, 5, "%"); // "Invalid operator"


function simpleCalculator(num1, num2, operator){
    let result = 0;

    if(operator === "+"){
        result = num1 + num2;
    }else if(operator === "-"){
        result = num1 - num2;
    }else if(operator === "*"){
        result = num1 * num2;
    }else if(operator === "/"){
        result = num1/num2;
    }else{
        result = "Invalid Operator";
    }

    return result;
}

console.log(simpleCalculator(10, 2, "+"));