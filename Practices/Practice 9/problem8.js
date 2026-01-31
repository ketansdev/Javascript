// Program: Find Highest Scoring Subject

// Input object:

// let student = {
//   name: "Rahul",
//   marks: {
//     math: 80,
//     eng: 95,
//     sci: 90,
//     hindi: 88
//   }
// };

// Task:
// Write a function:
// getHighestSubject(student)

// ➡️ It should return:

// "eng"

let student = {
  name: "Rahul",
  marks: {
    math: 80,
    eng: 95,
    sci: 90,
    hindi: 88,
  },
};

const getHighestSubject = function (student) {
  let highestMarks = 0;
  let highestSubject = "";

  for (let subject in student.marks) {
    if (student.marks[subject] > highestMarks) {
      highestMarks = student.marks[subject];
      highestSubject = subject;
    }
  }
  return highestSubject;
};

let result = getHighestSubject(student);
console.log(result);
