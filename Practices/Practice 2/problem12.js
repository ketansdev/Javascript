// Conditional Program 12: Login Validation

// Task:
// Write a function called validateLogin that:
// Takes username and password
// Assume correct credentials are:

// username: "admin"
// password: "12345"

// Returns:

// "Login successful" if both match
// "Invalid credentials" otherwise

// Example:
// validateLogin("admin", "12345"); // "Login successful"
// validateLogin("user", "12345");  // "Invalid credentials"


function validateLogin(username, password){
    if(username === "admin" && password === "12345"){
        return "Login successful";
    }else{
        return "Invalid Credentials"
    }
}

console.log(validateLogin("admin", "12345"))

function validateLogin(username, password){
    if(username === "admin" && password === "12345"){
        return "Login successful";
    }else{
        if(username !== "admin"){
            return "Invalid Username";
        }else{
            return "Invalid Password";
        }
    }
}

console.log(validateLogin("admin", "12345"))