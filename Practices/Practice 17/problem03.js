// Write a program that prints numbers from 1 to 50.
// For each number:

// If it is divisible by 3, print "Fizz"
// If it is divisible by 5, print "Buzz"
// If it is divisible by both 3 and 5, print "FizzBuzz"
// Otherwise, print the number itself

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
