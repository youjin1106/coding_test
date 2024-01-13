const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const list = input[1].split(" ").map(Number);
const m = Number(input[2]);
const findList = input[3].split(" ").map(Number);

let result = new Array(m).fill(0);

//이진탐색 위해 오름차순 정렬
list.sort((a, b) => a - b);

min = 0;
max = list.length;

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

for (let i = 0; i < findList.length; i += 1) {
  const n =
    upperBound(list, findList[i], min, max) -
    lowerBound(list, findList[i], min, max);
  result[i] = n;
}

console.log(result.join(" "));
