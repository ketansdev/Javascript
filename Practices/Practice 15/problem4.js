// Print numbers from N to 1

const printNum = function(n){
    if(n === 0){
        return;
    }

   console.log(n);
   printNum(n-1);
}

printNum(5);