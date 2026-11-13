console.log('*****start*****');

for(let i:number =1;i<=5;i++){
    console.log(i);
    
}


//! sum of n natrual numbers

let sum: number =0;

for(let i:number=1;i<=11;i++){

    sum+=i;

}

console.log('sum of N natural numbers :',sum);

let factorial: number=1
let n:number=5

for(let i:number=1;i<=n;i++){

    factorial *= i;

}

console.log(factorial);


//! factor of a number

let randomNumber=13
for(let i= 1;i<=Math.floor(randomNumber/2);i++){

    if(randomNumber%i===0){
        console.log(i);  
    }
    
    
}
console.log(randomNumber);



