// Convert Marks Object to Total & Average

// Input:

// let student = {
//   name: "Rahul",
//   marks: {
//     math: 70,
//     eng: 80,
//     sci: 90
//   }
// };

// Task:

// Write a function:

// getResultSummary(student)

// Output should be an object:
// {
//   total: 240,
//   average: 80
// }

let student = {
  name: "Rahul",
  marks: {
    math: 70,
    eng: 80,
    sci: 90,
  },
};

const getResultSummary = function (student) {
  let result = {};
  let total = 0;
  let average = 0;
  let count = 0;

  for (let subject in student.marks) {
    total += student.marks[subject];
    count++;
  }
  average = total / count;

  result.total = total;
  result.average = average;

  return result;
};

let result = getResultSummary(student);
console.log(result);
