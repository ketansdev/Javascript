// Write a program that prints all even numbers from 1 to 20 (inclusive).
// Then, for each even number, also print:

// "Small" if the number is less than 10
// "Medium" if the number is between 10 and 15 (inclusive)
// "Large" if the number is greater than 15

// Use only variables, conditionals, and loops

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    if (i < 10) {
      console.log(i, "Small");
    } else if (i >= 10 && i <= 15) {
      console.log(i, "Medium");
    } else {
      console.log(i, "Large");
    }
  }
}
