/*
//!while syntax
start
while(end){
//?code
change;
}

*/

//! sum of digit
//example 234= 9

let no:number=2365
let summ:number=0;

while(no>0){
    let lastDigit:number = no%10;
    summ+=lastDigit
  no=Math.floor(no/10);
}

console.log(summ);







