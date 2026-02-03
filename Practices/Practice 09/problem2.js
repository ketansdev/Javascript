// Program: Find Subject with Lowest Marks

// Task:
// Write a function lowestMarksSubject(student) that:
// Loops through student.marks
// Finds the subject with the lowest marks
// Returns the subject name
// Example Input:
// math: 80, eng: 95, sci: 90

// Expected Output:
// "math"


let student = {
    name: "Rahul",
    marks: {
        math: 80,
        eng: 95,
        sci: 90
    }
};


const lowestMarksSubject = function(student){
    let lowest = Infinity;
    let subject_name = ""

    for(let subject in student.marks){
        if(student.marks[subject] < lowest){
            lowest = student.marks[subject];
            subject_name = subject;
        }
    }

    return subject_name;
}

let result = lowestMarksSubject(student);
console.log(result);