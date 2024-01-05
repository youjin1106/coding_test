const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let min = 0;
let max = arr.reduce((a, b) => Math.max(a, b));
let answer = 0;
while (min <= max) {
  //mid = 절단기에 높이 지정
  let mid = parseInt((min + max) / 2);
  let result = 0;
  for (let i of arr) {
    //나무의 수대로 절단기 높이에 맞게 자름
    if (i >= mid) {
      //나무가 절단기에 설정한 높이보다 클 때만 자름
      cut = i - mid;
      result += cut; //자른 나무들의 총 길이 합
    }
  }
  if (result >= m) {
    //나무가 필요한 양보다 많이 잘렸을 경우
    min = mid + 1;
    answer = mid;
  } else {
    //필요한 양보다 적게 자른 경우
    max = mid - 1; //절단기 높이를 낮춤
  }
}

console.log(answer);
