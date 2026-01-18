// Conditional Program 5: Grade Calculator

// Task:
// Write a function called calculateGrade that:
// Takes marks (0–100)

// Returns:

// "A" if marks ≥ 90
// "B" if marks ≥ 75
// "C" if marks ≥ 60
// "D" if marks ≥ 40
// "Fail" if marks < 40

// Example:
// calculateGrade(92); // "A"
// calculateGrade(78); // "B"
// calculateGrade(35); // "Fail"


function calculateGrade(marks){
    if(marks > 100 || marks < 0){
        return "Invalid marks";
    }
    if(marks >= 90){
        return "A";
    }else if(marks >= 75){
        return "B";
    }else if(marks >= 60){
        return "C";
    }else if(marks >= 40){
        return "D";
    }else{
        return "Fail";
    }
}

console.log(calculateGrade(57))