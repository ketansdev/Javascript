// Advanced Conditional Program 15: ATM Withdrawal

// Task:
// Write a function called atmWithdraw that:
// Takes balance and withdrawAmount

// Returns:

// "Insufficient balance" if withdrawAmount > balance
// "Invalid amount" if withdrawAmount ≤ 0
// "Withdrawal successful" otherwise

// Example:
// atmWithdraw(5000, 6000); // "Insufficient balance"
// atmWithdraw(5000, -100); // "Invalid amount"
// atmWithdraw(5000, 1000); // "Withdrawal successful"

function atmWithdraw(balance, withdrawAmount) {
  if (withdrawAmount <= 0) {
    return "Invalid amount";
  } else if (withdrawAmount > balance) {
    return "Insufficient balance";
  } else {
    return "Withdrawal successful";
  }
}

console.log(atmWithdraw(5000, 10000));
