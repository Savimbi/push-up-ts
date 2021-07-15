function alphabeticShift(inputString: string): string{

    const alphabet: string[] = ['a','b','c','d','e','f','g','h','i',
    'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 

    let inputShefted = inputString.split('');
    for(let i = 0; i<inputShefted.length; i ++){
        let index = 0;

        if(inputShefted[i] !== 'z'){
            index = alphabet.indexOf(inputShefted[i])+1;
        }
        inputShefted[i] = alphabet[index];
    }
    return inputShefted.join('');
}
console.log(alphabeticShift('crazy'));