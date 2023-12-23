const fs = require('fs');
const input = fs.readFileSync('testFile.txt').toString().trim().split('\n');

const n = Number(input[0]);
const arr = [];
for(let i = 1 ; i <= n ; i += 1){
  const meeting = input[i].split(' ').map(Number);
  arr.push(meeting);
}
arr.sort((a, b) => {
  if(a[1]!=b[1]) return a[1]-b[1];
  else return a[0]-b[0];
});

let current = 0;
let count = 1;

for(let j = 1 ; j < n ; j += 1){
  if(arr[current][1] <= arr[j][0]){
    current = j;
    count += 1;
  }
}
console.log(count);
