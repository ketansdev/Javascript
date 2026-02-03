// Add Result Status

// Write a function addResultStatus(student) that returns a new object with:
// total
// average

// status → "Pass" or "Fail"
// (Fail if any subject < 40)

let student = {
  name: "Rahul",
  marks: {
    math: 80,
    eng: 35,
    sci: 90,
  },
};

const addResultStatus = function (student) {
  let result = {};
  let failedCounts = 0;
  let total = 0;
  let average = 0;
  let count = 0;

  for (let subject in student.marks) {
    total += student.marks[subject];
    count++;
    if (student.marks[subject] < 40) {
      failedCounts++;
    }
  }
  average = parseFloat((total / count).toFixed(2));

  result.total = total;
  result.average = average;

  if (failedCounts > 0) {
    result.status = "Fail";
  } else {
    result.status = "Pass";
  }

  return result;
};

let result = addResultStatus(student);
console.log(result);
