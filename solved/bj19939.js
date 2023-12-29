const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let result = 0;
let sum = 0;
//1부터 바구니k까지의 합
for (let i = 1; i <= k; i += 1) {
  sum += i;
}

//합이 n보다 작은 경우 2번 조건 안됨
if (sum > n) result = -1;
//공의 개수가 충분
else {
  n -= sum;
  if (n % k === 0) result = k - 1;
  else result = k;
}
console.log(result);
