const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const str = input[0];
const arr = [];
for(let i = 0 ; i < str.length ; i += 1 ){
  arr.push(Number(str.charAt(i)));
}
arr.sort((a, b) => b - a );

console.log(arr.join(''));