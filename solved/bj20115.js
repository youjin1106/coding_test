const fs = require('fs');
const input = fs.readFileSync('testFile.txt').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
arr.sort((a,b)=>b-a);

console.log(arr)
let result = 0;
for(let i = 0; i<n-1 ; i+=1){
  console.log(arr[i], arr[i+1])
  if(arr[i]<= arr[i+1])
    result = arr[i]/2 + arr[i+1];
  else result = arr[i] + arr[i+1]/2;
  arr[i+1] = result;
}
console.log(result);