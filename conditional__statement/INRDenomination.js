let totalMoney =4873;
let note=0;

if(totalMoney>=500){
    
 note=(Math.floor(totalMoney/500));
    totalMoney = totalMoney%500;
    console.log(totalMoney);

}

if(totalMoney>=200){

 note += (Math.floor(totalMoney/200));
    totalMoney = totalMoney%200;
    console.log(totalMoney);
    console.log(note);
    
}

if(totalMoney>=100){

 note += (Math.floor(totalMoney/100));
    totalMoney = totalMoney%100;
    console.log(totalMoney);
    console.log(note);
    
}

if(totalMoney>=50){

 note += (Math.floor(totalMoney/50));
    totalMoney = totalMoney%50;
    console.log(totalMoney);
    console.log(note);
    
}

if(totalMoney>=20){

 note += (Math.floor(totalMoney/20));
    totalMoney = totalMoney%20;
    console.log(totalMoney);
    console.log(note);
    
}

if(totalMoney>=10){

 note += (Math.floor(totalMoney/10));
    totalMoney = totalMoney%10;
    console.log(totalMoney);
    console.log(note);
    
}

if(totalMoney>=5){

 note += (Math.floor(totalMoney/5));
    totalMoney = totalMoney%5;
    console.log(totalMoney);
    console.log(note);
    
}



















