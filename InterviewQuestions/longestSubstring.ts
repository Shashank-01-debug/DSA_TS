const input:string='abcabcbbd';

let left:number=0;
let maxLength: number =0;

let set:Set<string> = new Set();

for(let right=0; right<input.length;right++){
    let chr:string = input[right];
   
    while(set.has(chr)){

        set.delete(input[left])
        left++;

    }

set.add(chr);

maxLength = Math.max(maxLength,right-left+1);


}

console.log(maxLength);



