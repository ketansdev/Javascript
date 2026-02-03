// Program: Find Failed Subjects

// Task:
// Write a function getFailedSubjects(student) that:
// Returns an array of subject names
// Marks < 40 are failed

// Example output:

// ["eng"]

let student = {
  name: "Rahul",
  marks: {
    math: 80,
    eng: 35,
    sci: 90,
    hindi: 30,
  },
};

const getFailedSubjects = function (student) {
  let failedSubjects = [];

  for (let subject in student.marks) {
    if (student.marks[subject] < 40) {
      failedSubjects.push(subject);
    }
  }

  return failedSubjects;
};

let result = getFailedSubjects(student);
console.log(result);
