function alphabetSubSequence(s:string): boolean{
    const chars: string[] = s.split('');
    const charValues: number[] = [];

    chars.forEach((char: string) =>{
        charValues.push(char.charCodeAt(0));
    });
    
    if(new Set(charValues).size !== charValues.length){
        return false;
    }
    for(let i = 0; i < charValues.length-1; i++){
        if(charValues[i]>= charValues[i+1]){
            return false;
        }
    }
    return true;
}

console.log(alphabetSubSequence('zab'));
console.log(alphabetSubSequence('effg'));
console.log(alphabetSubSequence('cdce'));
console.log(alphabetSubSequence('ace'));