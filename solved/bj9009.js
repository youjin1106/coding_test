const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);

const fibo = [];
fibo.push(0);
fibo.push(1);

//10억보다 작은 피보나치 수들을 배열에 저장
while (fibo[fibo.length - 1] < 1e9) {
  fibo.push(fibo[fibo.length - 2] + fibo[fibo.length - 1]);
}

for (let i = 1; i <= n; i += 1) {
  let testCase = input[i];
  const result = [];
  //10억보다 작은 피보나치 수열의 길이
  let count = fibo.length - 1;
  //구하려는 수가 0보다 작아질때까지
  while (testCase > 0) {
    //해당 수보다 작으면서, 가장 큰 피보나치 수일때
    if (testCase >= fibo[count]) {
      testCase -= fibo[count];
      result.push(fibo[count]);
    }
    count -= 1;
  }
  result.sort((a, b) => a - b);
  console.log(result.join(" "));
}
