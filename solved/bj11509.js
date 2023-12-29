const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let result = 0;
const arrow = new Array(1000001).fill(0);
for (const i of arr) {
  //각 높이에 화살 있는지 확인
  if (arrow[i] > 0) {
    //해당 위치 화살 하나 제외
    arrow[i] -= 1;
    //화살이 한 칸 아래로 이동하며 새로운 화살 사용하지 않음
    arrow[i - 1] += 1;
  } else {
    //해당 위치에 화살 없으면
    //화살 다음 높이로 떨어짐
    arrow[i - 1] += 1;
    result += 1;
  }
}

console.log(result);
