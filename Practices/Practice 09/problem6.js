// Program: Add Grade to Student Object

// Task:

// Write a function addGrade(student) that:
// Calculates average marks
// Adds a new property grade to student:
// "A" if average ≥ 75
// "B" if average ≥ 50
// "C" otherwise

// Returns the updated student object

// Example Output:

// {
//   name: "Rahul",
//   marks: { math: 80, eng: 70, sci: 90 },
//   grade: "A"
// }

let student = {
  name: "Rahul",
  marks: {
    math: 80,
    eng: 70,
    sci: 90,
  },
};

const addGrade = function (student) {
  let average = 0;
  let count = 0;
  let sum = 0;

  for (let subject in student.marks) {
    sum += student.marks[subject];
    count++;
  }

  average = sum / count;

  if (average >= 75) {
    student.grade = "A";
  } else if (average >= 50) {
    student.grade = "B";
  } else {
    student.grade = "C";
  }

  return student;
  
};

let result = addGrade(student);
console.log(result);