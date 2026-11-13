const input:string ='shashank';
const charMap:Map<string,number> = new Map();

//! calculate frequency of each character

for(let i:number=0;i<input.length;i++){
    const ch:string=input[i];

    charMap.set(ch,(charMap.get(ch)??0)+1);
    
}


let unique:string="";
let duplicate:string="";

for(const[ch,count] of charMap){

    if(count===1){
        unique+=ch;
    }
    else{
        duplicate+=ch;
    }
}

console.log(unique);
console.log(duplicate);

