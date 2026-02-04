// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// console.log("3");

// ans - 1, 3, 2 



// console.log("A");

// Promise.resolve().then(() => {
//   console.log("B");
// });

// setTimeout(() => {
//   console.log("C");
// }, 0);

// console.log("D");

//  ans - A D B 0



// setTimeout(() => {
//   console.log("A");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("B");

//   setTimeout(() => {
//     console.log("C");
//   }, 0);
// });

// console.log("D");

// ans - D B A C



// Promise.resolve().then(() => {
//   console.log("A");
// });

// Promise.resolve().then(() => {
//   console.log("B");

//   Promise.resolve().then(() => {
//     console.log("C");
//   });
// });

// console.log("D");

// ans - D A B C



// setTimeout(() => {
//   console.log("A");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("B");
// });

// Promise.resolve().then(() => {
//   console.log("C");
// });

// setTimeout(() => {
//   console.log("D");
// }, 0);

// console.log("E");

// ans - E B C A D


// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");

//   Promise.resolve().then(() => {
//     console.log("Promise 1");
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise 2");

//   setTimeout(() => {
//     console.log("Timeout 2");
//   }, 0);
// });

// console.log("End");


//  Start End Promise 2  Timeout 1 Promise 1 Timeout 2





console.log("A");

setTimeout(() => {
  console.log("B");

  Promise.resolve().then(() => {
    console.log("C");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("D");

  setTimeout(() => {
    console.log("E");
  }, 0);

  Promise.resolve().then(() => {
    console.log("F");
  });
});

console.log("G");




// ans - A G D F B C E