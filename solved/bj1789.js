const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const testCase = Number(input[0]);
let line = 1;
for(let i = 0; i < testCase ; i += 1){
  const people = Number(input[line]);
  const arr = [];
  for(let j = line+1 ; j <= line+people ; j += 1){
    const data = input[j].split(' ').map(Number);
    arr.push(data);
  }
  //첫번째 순위 기준 오름차순 정렬
  arr.sort((a, b) => a[0]- b[0]);

  let count = 0;
  let minVal = 100001;
  for(const [a, b] of arr){
    if(b < minVal){
      minVal = b;
      count += 1;
    }
  }
  console.log(count);
  line += people+1;
}