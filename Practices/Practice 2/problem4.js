// Conditional Program 4: Check Voting Eligibility

// Task:
// Write a function called canVote that:
// Takes age as input

// Returns:

// "Eligible to vote" if age ≥ 18
// "Not eligible to vote" otherwise

// Example:
// canVote(20); // "Eligible to vote"
// canVote(16); // "Not eligible to vote"


function canVote(age){
    if(age >= 18){
        return "Eligible to vote";
    }else{
        return "Not eligible to vote";
    }
}

console.log(canVote(20))