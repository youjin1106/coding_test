const fs = require('fs');
const input = fs.readFileSync('testFile.txt').toString().trim().split('\n');

let n = Number(input[0]);
result = 0;
if(n%5===0){
  result = n/=5;
} else{
  let five = parseInt(n/5);
  while(five>=0){
    let cur = n - five * 5;
    let two = 0;
    if (cur%2===0) {
      two += cur/2;
      result = five + two;
      break;
    }
    else {
      five -= 1;
    }
  }
  if (five<0) result = -1;
}
console.log(result);