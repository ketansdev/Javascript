// Advanced Conditional Program 17: Traffic Light System

// Task:
// Write a function called trafficSignalAction that:
// Takes a signal color ("red", "yellow", "green")

// Returns:
// "Stop" for "red"
// "Get Ready" for "yellow"
// "Go" for "green"
// Any other value → "Invalid signal"

// Example:
// trafficSignalAction("red");    // "Stop"
// trafficSignalAction("green");  // "Go"
// trafficSignalAction("blue");   // "Invalid signal"


function trafficSignalAction(color){
    color = color.toLowerCase();
    if(color === "red"){
        return "Stop";
    }else if(color === "yellow"){
        return "Get Ready";
    }else if(color === "green"){
        return "Go";
    }else{
        return "Invalid signal";
    }
}

console.log(trafficSignalAction("red"));
