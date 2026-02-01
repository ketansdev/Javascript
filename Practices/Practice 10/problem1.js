// Question 1: Update Marks of a Subject

// Task

// Create a function updateMarks(student, subject, newMarks) that:

// Takes:

// student object
// subject (string)
// newMarks (number)
// Updates the marks of the given subject inside the student object

// Returns the updated student 




let student = {
  name: "Rahul",
  marks: {
    math: 70,
    eng: 65,
    sci: 80
  }
};

const updateMarks = function(student, subject, newMarks){
    student.marks[subject] = newMarks;

    return student;
}

let result = updateMarks(student, "math", 85);
console.log(result);