// Question 3: Update Marks
// Task:

// If a student has marks less than 40, add 10 bonus marks.

// Function:
// function addBonusMarks(student)
// Example:
// addBonusMarks({ name: "Rahul", marks: 35 });

// Output:
// { name: "Rahul", marks: 45 }

const addBonusMarks = function(student){
    if(student.marks < 40){
        student.marks = student.marks + 10
    }
    return student;
}

let result = addBonusMarks({ name: "Rahul", marks: 35 });
console.log(result);