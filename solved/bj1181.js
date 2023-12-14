const fs = require('fs');
const input = fs.readFileSync('./testFile.txt').toString().trim().split('\n');

const count = Number(input[0]);
let mySet = new Set();
let arr = [];
for(let i = 1 ; i <= count ; i += 1 ){
  //중복 제거를 위해 set에 입력
  mySet.add(input[i].trim());
}
//중복 제거하고 배열에 기록
arr.push(...mySet);

arr.sort((a, b) => {
  //문자열의 길이 비교 
  if(a.length !== b.length) return a.length - b.length;
  //문자열 길이가 같으면 비교 연산자로 사전 순으로 비교
  else return a > b ? 1 : -1;
})

let result = [];
for(let j = 0 ; j < arr.length ; j += 1 ){
  result += arr[j] + '\n';
}
console.log(result);