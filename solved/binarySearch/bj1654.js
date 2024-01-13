const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [k, n] = input[0].split(" ").map(Number);
const arr = [];
for (let i = 1; i <= k; i += 1) {
  arr.push(Number(input[i]));
}

let min = 1;
let max = arr.reduce((a, b) => Math.max(a, b));
let answer = 0;
while (min <= max) {
  let mid = parseInt((min + max) / 2);
  let count = 0;
  for (let i of arr) {
    count += parseInt(i / mid);
  }
  if (count < n) {
    max = mid - 1;
  } else {
    min = mid + 1;
    answer = mid;
  }
}

console.log(answer);
