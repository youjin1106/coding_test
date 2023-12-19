const fs = require('fs');
const input = fs.readFileSync('testFile.txt').toString().trim().split('\n');

let [a, b] = input[0].split(' ').map(Number);
let count = 0;
//a보다 클때까지
while(a <= b){
  if(b%10===1){
    b = Number.parseInt(b/10);
  }else b /= 2;
  count += 1;
  if (a===b) {
    console.log(count +1);
    break;
  }
}
if(a!==b) console.log(-1);