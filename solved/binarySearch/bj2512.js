const fs = require("fs");
const input = fs.readFileSync("testFile.txt").toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const m = Number(input[2]);

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));

let result = 0;
//이진 탐색
while (start <= end) {
  //현재 상한액
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (let a of arr) {
    //상한액 이하의 요청인지 비교하여 배정
    total += Math.min(a, mid);
  }
  //상한액 증가
  if (total <= m) {
    result = mid;
    start = mid + 1;
    //상한액 감소
  } else {
    end = mid - 1;
  }
}
console.log(result);
