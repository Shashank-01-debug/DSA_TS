const userInput:string ='shashank';
let unique:string ="";
let duplicate:string="";

for(let i:number=0;i<userInput.length;i++){
    let count:number=0;
    for(let j:number=0;j<userInput.length;j++){
        if(userInput[i]===userInput[j]){
            count++;
        }
    }


if(unique.includes(userInput[i])||duplicate.includes(userInput[i])){
    continue;
}
if(count===1){
    unique += userInput[i];
}
else{
    duplicate+=userInput[i];
}


}


console.log(unique);
console.log(duplicate);


