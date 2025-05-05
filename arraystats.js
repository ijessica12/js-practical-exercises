function arraystats(array){
    let sum=0;
    let min=array[0];
    let max=array[0];
    let average;
    for (let i=0;i<array.length;i++){
        sum = sum + array[i];
        if (array[i]<min){
            min=array[i];
        }
        if (array[i]>max){
            max=array[i];
        }
    }
    average=sum/array.length;
    return{
        sum:sum,
        average:average,
        min:min,
        max:max
    };
}
const result=arraystats([1, 2, 3, 4, 5]);
console.log("sum:" , result.sum);
console.log("average:",result.average);
console.log("min:", result.min);
console.log("max:",result.max);