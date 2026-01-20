// Problem: Check if a Number is Palindrome

function pallindrom(n){
    let num = n;
    let reverse = 0;

    for(; n > 0; n = Math.floor(n/10)){
        let digit = n % 10;
        reverse = reverse * 10 + digit;
    }

    if(reverse === num){
        return "Pallindrome";
    }else{
        return "Not Pallindrome";
    }
}

console.log(pallindrom(4554));