const input : string="shashank";
let count:number=0;

for(let i:number=0;i<input.length;i++){

    const ch=input[i].toLowerCase();

    if(ch==='a'||ch==='e'||ch==='i'||ch==='o'||ch==='u'){
        count++;
    }

}

console.log('total number of vowels are:',count);


