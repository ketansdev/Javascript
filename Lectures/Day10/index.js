// Execution context

// Memory Allocation
//  a = undefined
//  b = undefined
//  addNumber = fn code
// sumResult1 = undefined
// sumResult2 = undefined

// Execution Phase


// console.log(a);
// var a = 10;
// var b = 20;


// var sumResult1 = addNumber(a, b);
// console.log(sumResult1);

// function addNumber(num1, num2){
//     var sum = num1 + num2;
//     return sum;
// }

// var sumResult1 = addNumber(a, b);
// var sumResult2 = addNumber(4, 5);

// console.log(sumResult1, sumResult2);




// let const

// Memory Allocation
// a = <uninitialised> (Temporal Dead Zone)
// b = <uninitialised> (Temporal Dead Zone)

// Execution Phase

//  we get error like - cannot access "a" before initialization 

// console.log(a);
// console.log(b);
// let a = 10;
// const b = 20;








/************************************************************** */

// Execution context

// Memory allocation
//  a = <uninitialised> (Temporal Dead Zone)
//  b = <uninitialised> (Temporal Dead Zone)

// addNumber = <uninitialised> (Temporal Dead Zone)
// result = <uninitialised> (Temporal Dead Zone)

// Execution phase
// a = 10
// b = 20

// addNumber = fn code
// result = 30



// let a = 10;
// const b = 20;

// const addNumber = function(num1, num2){
//     const sum = num1 + num2;
//     return sum;
// }

// const result = addNumber(a, b);
// console.log(result)



/********************************************************************** */
// Execution context

// Memory allocation
// a = <uninitialised> (Temporal Dead Zone)
// b = <uninitialised> (Temporal Dead Zone)

// result = <uninitialised> (Temporal Dead Zone)
// addNumber = <uninitialised> (Temporal Dead Zone)

// Execution phase
// a = 10
// b = 20

// result --> This will throw error as - cannot access "addNumber" before initialisation

let a = 10;
const b = 20;

const result = addNumber(a, b);
console.log(result)

const addNumber = function(num1, num2){
    const sum = num1 + num2;
    return sum;
}


/*********************************************************************************** */