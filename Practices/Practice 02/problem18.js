// Advanced Conditional Program 18: Movie Ticket Pricing

// Task:
// Write a function called movieTicketPrice that:
// Takes age and showTime ("morning" or "evening")

// Pricing rules:

// Children (< 12) → ₹100
// Adults (12–59):
// Morning → ₹150

// Evening → ₹200
// Seniors (≥ 60) → ₹120

// If invalid age or showTime → "Invalid input"

// Example:
// movieTicketPrice(10, "morning"); // 100
// movieTicketPrice(30, "evening"); // 200
// movieTicketPrice(65, "morning"); // 120

function movieTicketPrice(age, showTime){
    if(age < 0){
        return "Invalid input";
    }
    showTime = showTime.toLowerCase();
    
    if(age < 12){
        return 100
    }else if(age >= 60){
        return 120
    }
    else{
        if(showTime === "morning"){
            return 150
        }else if(showTime === "evening"){
            return 200
        }else{
            return "Invalid input"
        }
    }
}


console.log(movieTicketPrice(40, "night"))