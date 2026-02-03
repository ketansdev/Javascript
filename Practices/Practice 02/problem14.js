// Advanced Conditional Program 14: Password Strength Checker

// Task:
// Write a function called checkPasswordStrength that:
// Takes a password string

// Returns:

// "Weak" → length < 6
// "Medium" → length between 6 and 10
// "Strong" → length > 10
// If password is empty → "Invalid password"

// Example:
// checkPasswordStrength("abc");        // "Weak"
// checkPasswordStrength("abc123");     // "Medium"
// checkPasswordStrength("abc123@xyz"); // "Strong"


function checkPasswordStrength(password){
    if(password === ""){
        return "Invalid password";
    }
    else if(password.length < 6){
        return "Weak";
    }else if(password.length <= 10){
        return "Medium";
    }else{
        return "Strong"
    }
}

console.log(checkPasswordStrength("abc"));