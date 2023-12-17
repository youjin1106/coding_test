const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, k] = (input[0]).split(' ').map(Number);
const coinList = [];
let result = 0;
for(let i = 1 ; i <= n ; i += 1 ){
  coinList.push(Number(input[i]));
}

for(let j = n - 1 ; j >= 0 ; j -= 1){
  result += parseInt(k / coinList[j]);
  k %= coinList[j];
}

console.log(result);