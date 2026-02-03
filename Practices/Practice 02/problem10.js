// Conditional Program 10: Electricity Bill Calculator

// Task:
// Write a function called calculateBill that:
// Takes units consumed
// Calculates bill as per slabs:

// Units Range	Rate (₹)
// First 100 units	1/unit
// Next 100 units	2/unit
// Above 200 units	3/unit
// Rules:

// If units ≤ 100 → units × 1
// If units ≤ 200 →
// 100 × 1 + (units - 100) × 2
// If units > 200 →
// 100 × 1 + 100 × 2 + (units - 200) × 3

// Example:
// calculateBill(50);   // 50
// calculateBill(150);  // 200
// calculateBill(250);  // 450


function calculateBill(units){

    if(units < 0){
        return "Invalid";
    }
    let bill = 0
    if(units <= 100){
        bill = units * 1;
    }else if(units <= 200){
        bill = 100 * 1 + (units - 100) * 2;
    }else{
        bill = (100 * 1) + (100 * 2) + (units - 200) * 3
    }

    return bill;
}

console.log(calculateBill(250))