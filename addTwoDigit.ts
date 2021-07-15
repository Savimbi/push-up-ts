function addTwoDig(n:any): number{
const nums = n.toString().split('');
return nums.reduce((a: string, b: string) =>{
    return parseInt(a) + parseInt(b);
});
}
console.log(addTwoDig(345));