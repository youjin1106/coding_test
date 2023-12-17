const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const person = Number(input[0]);
const arr = input[1].split(' ').map(Number);

arr.sort((a, b) => a-b);
let x = 0;
arr.reduce((acc, cur) => {
  x += acc + cur;
  return acc + cur;
},0);

console.log(x)
