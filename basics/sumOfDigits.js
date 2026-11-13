let a=4567;
let sum=0;

while(a>0){

    let lastDigit = a%10;
    sum=sum+lastDigit;
    a=Math.floor(a/10);
    
}

console.log(sum);
