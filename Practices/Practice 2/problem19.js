// Advanced Conditional Program 19: Shipping Cost Calculator

// Task:
// Write a function called calculateShipping that:
// Takes weight (kg) and distance (km)

// Rules:

// If weight ≤ 5kg:
// Distance ≤ 50km → ₹50
// Distance > 50km → ₹100
// If weight > 5kg:
// Distance ≤ 50km → ₹100
// Distance > 50km → ₹200
// If weight or distance ≤ 0 → "Invalid input"

// Example:
// calculateShipping(3, 40); // 50
// calculateShipping(3, 80); // 100
// calculateShipping(8, 40); // 100
// calculateShipping(8, 80); // 200


function calculateShipping(weight, distance){
    if(weight <= 0 || distance <= 0){
        return "Invalid input"
    }

    let shippingCost = 0;

    if(weight <= 5){
        if(distance <= 50){
            shippingCost = 50;
        }else{
            shippingCost = 100;
        }
    }else{
        if(distance <= 50){
            shippingCost = 100;
        }else{
            shippingCost = 200;
        }
    }
    return shippingCost;
}

console.log(calculateShipping(3, 80))