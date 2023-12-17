const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = Number(input[0]);
const arr = input[1].split(' ').map(Number);

//set으로 중복을 제거 후 정렬을 위해 다시 배열로 바꿈
const uniqueArr = [...new Set(arr)];
sortedArr = uniqueArr.sort((a, b) => a-b);

//오름차순으로 정렬된 배열을 그대로 매핑
const resultMap = new Map();
for(let i = 0 ; i < sortedArr.length ; i += 1){
  resultMap.set(uniqueArr[i], i)
}

let result = '';
for (n of arr){
  result += resultMap.get(n) + ' ';
}

console.log(result);
