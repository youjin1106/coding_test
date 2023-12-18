const fs = require('fs');
const input = fs.readFileSync('testFile.txt').toString().trim().split('\n');

const arr = input[0].split('-');
let result = 0;
for (let i = 0 ; i < arr.length ; i += 1){
  //더하기 연산자들의 그룹들을 더함
  const plus = arr[i].split('+').map(Number).reduce((a, b) => a+b,0);
  if(i===0) result += plus;
  else result -= plus;
}

console.log(result);