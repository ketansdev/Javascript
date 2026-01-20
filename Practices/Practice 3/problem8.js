// Check if a number is Armstrong 

function checkArmstrong(n){
    let num = n;
    let sum = 0;
    let temp = n;
    let count = 0;

    for (; temp > 0; temp = Math.floor(temp/10)){
        count++;
    }

    for(; n > 0; n = Math.floor(n/10)){
        let digit = n % 10;
        sum += digit ** count;
    }

    if(num === sum){
        return "Armstrong";
    }else{
        return "Not Armstrong";
    }
}

console.log(checkArmstrong(9475));