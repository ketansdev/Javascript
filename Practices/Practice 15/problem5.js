// Print numbers from 1 to N using recursion

const printNum = function (n) {
  if (n === 0) {
    return;
  }

  printNum(n - 1);
  console.log(n);
};

printNum(5);

