let N = 10;
let K = 3;
let Arr = [1,2,3,4,5,6,7,8,9,10];
let ArrAfter = [4,5,6,7,8,9,10,1,2,3];
if(K>N){
  K=K%N
}
let newArr=[];
for(let i=0;i<N;i++){

if(i>K-1){
newArr.push(Arr[i])
}
}
for(let i=0;i<K;i++){
 newArr.push(Arr[i])
}
console.log(newArr)
