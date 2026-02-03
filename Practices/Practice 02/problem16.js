// Advanced Conditional Program 16: Discount Calculator

// Task:
// Write a function called calculateDiscount that:
// Takes totalAmount
// Returns final amount after discount:
// If amount ≥ 5000 → 20% discount
// If amount ≥ 3000 → 10% discount
// If amount ≥ 1000 → 5% discount
// Otherwise → No discount

// Example:
// calculateDiscount(6000); // 4800
// calculateDiscount(3500); // 3150
// calculateDiscount(1500); // 1425
// calculateDiscount(500);  // 500


function calculateDiscount(totalAmount){
    let discountAmount = 0;

    if(totalAmount >= 5000){
        discountAmount = totalAmount - (totalAmount * 20 / 100);
    }else if(totalAmount >= 3000){
        discountAmount = totalAmount - (totalAmount * 10/ 100);
    }else if(totalAmount >= 1000){
        discountAmount = totalAmount - (totalAmount * 5 / 100);
    }else{
        return "No discount";
    }

    return discountAmount
}

console.log(calculateDiscount(500));