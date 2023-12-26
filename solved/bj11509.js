const fs = require("fs");
const input = fs.readFileSync("testFile.txt").toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let result = 0;
const arrow = new Array(1000001).fill(0);
console.log(arr.length);
for (const i of arr) {
  //각 높이에 화살 있는지 확인
  if (arrow[i] > 0) {
    //해당 위치 화살 하나 제외
    arrow[i] -= 1;
    //화살이 한 칸 아래로 이동해서 존재
    arrow[i - 1] += 1;
  } else {
    arrow[i - 1] += 1;
    result += 1;
  }
}

console.log(result);
