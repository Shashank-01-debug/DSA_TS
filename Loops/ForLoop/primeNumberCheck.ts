let x:number=23;
let isPrime=true;

for(let i:number=2; i<=Math.floor(x/2); i++){

    if(x%i===0){
        isPrime=false;
        break;
    }

}

//console.log(isPrime);


function checkPrime(num:number):boolean{

if(num<=1) return false;
if(num===2) return true;
if(num%2===0) return false;
for(let i=3;i<=Math.floor(Math.sqrt(num));i+=2){
    if(num%i===0){
        return false;
    }
}

return true;


}

console.log(checkPrime(23));

