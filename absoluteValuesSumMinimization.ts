function absoluteValuesSumMinimization(a:number[]): number {

    const isEven = a.length % 2 === 0;
    return isEven ? a[a.length/2 -1] : a[Math.floor(a.length/2)];  
}
console.log(absoluteValuesSumMinimization([2,4,7]));
console.log(absoluteValuesSumMinimization([2,4,7,6]));
console.log(absoluteValuesSumMinimization([2,4,7,6,6]));
console.log(absoluteValuesSumMinimization([2,4,7,6,8,9]));
console.log(absoluteValuesSumMinimization([2,4,7,5,6,3,7]));