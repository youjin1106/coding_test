const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

function lowerBound(arr, start, end, target) {
  let result = 0;
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (target <= arr[mid]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

arr.reverse();

let newArr = [0];
for (let i = 0; i < n; i += 1) {
  if (newArr[newArr.length - 1] < arr[i]) {
    newArr.push(arr[i]);
  } else {
    let result = lowerBound(newArr, 0, newArr.length, arr[i]);
    newArr[result] = arr[i];
  }
}

//newArr의 0은 비교하기 위해 넣은 임의의 값이므로 제외
console.log(n - (newArr.length - 1));
