const fs = require('fs');
const input = fs.readFileSync('testFile.txt').toString().trim().split('\n');
const s = Number(input[0]);
let count = 0;
let sum = 0;
let n = 0;
while(s>sum){
  n+=1
  sum+=n;
}
console.log(n-1);