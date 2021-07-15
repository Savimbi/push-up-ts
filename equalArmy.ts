function equalArmy(myRight:number, myLeft: number, friendRight: number, friendLeft: number): boolean{
    let myStrongest= myRight > myLeft ? myRight : myLeft;
    let myWeak= myRight < myLeft ? myRight : myLeft;
    let friendStrongest= friendRight > friendLeft ? friendRight : friendLeft;
    let friendWeak= friendRight < friendLeft ? friendRight : friendLeft;

    if(myStrongest !== friendStrongest && myWeak !== friendWeak){
        return false;
    }
    return true;
}
console.log(equalArmy(20,12,37,45));
console.log(equalArmy(20,40,20,40));
console.log(equalArmy(12,12,12,12));
console.log(equalArmy(30,12,12,30));