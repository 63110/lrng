
function sumTo(n) { 
    let sum = 1;
    for (let i=0; i<n; i++){
        sum +=i;
    }
return sum;
}
console.log( sumTo(100) ); // 5050


function sumTo(n) { 
    if (n==1) return 1;
    return  n + sumTo(n-1)
    } 
       
    console.log( sumTo(100) ); // 5050


function sumTo(n) { 
    return  n*(n+1)/2
}
console.log (sumTo(100))
