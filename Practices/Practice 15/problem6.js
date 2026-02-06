// Sum numbers from 1 to N using recursion

const sumNum = function(n){
    if(n === 0){
        return 0;
    }
    
    return n + sumNum(n-1);
}

let result = sumNum(5);
console.log(result);