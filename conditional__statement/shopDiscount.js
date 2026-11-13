let shoppingPrice =10000;
let discount=0;

if(shoppingPrice>0 && shoppingPrice<=5000){

    console.log(shoppingPrice);
}

else if(shoppingPrice>5000 && shoppingPrice<=7000){
   
   discount=5;
   
}

else if(shoppingPrice>7000 && shoppingPrice<=9000){

discount=10;
}


else if(shoppingPrice>9000 ){

    discount=20;
    
}

console.log(shoppingPrice-Math.floor((discount*shoppingPrice)/100));



