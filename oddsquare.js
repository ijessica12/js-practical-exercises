function oddsquare(number){
    let odd=[0];
    let index=0;
    for ( let i=0;i<number.length;i++){
        if (number[i]%2 !== 0){
       odd[index]= number[i]*number[i];
        index++
        }
    }
    return odd;
    
}
const result =oddsquare([1, 2, 3, 4, 5, 6]);
const result2=oddsquare([10, 15, 20, 25, 30]);
console.log("result :",result);
console.log("result2 : ",result2);