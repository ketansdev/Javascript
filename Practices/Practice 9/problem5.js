// Program: Find Average Marks

// Task:

// Write a function averageMarks(student) that:
// Takes a student object
// Calculates average of all subjects
// Returns the average

let student = {
  name: "Rahul",
  marks: {
    math: 80,
    eng: 70,
    sci: 90,
  },
};

const averageMarks = function (student) {
  let sum = 0;
  let count = 0;

  for (let subject in student.marks) {
    count++;
    sum += student.marks[subject];
  }
  return sum / count;
};

let result = averageMarks(student);
console.log(result);
