function alternatingSum(inputArray: number[]): number[]{
    let oddSum: number=0;
    let evenSum: number = 0;

    for(let i =0; i < inputArray.length; i++){
        if(i % 2 ===0){
            evenSum += inputArray[i];
        }
        else{
            oddSum += inputArray[i];
        }
    }

    return [evenSum,oddSum];

}
console.log(alternatingSum([50,40,30,54,78,20,10]));