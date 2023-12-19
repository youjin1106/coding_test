const fs = require('fs');
const input = fs.readFileSync('testFile.txt').toString().trim().split('\n');
const n = Number(input[0]);

let five = Number.parseInt(n/5);
let three = 0;
let result = 0;
if(n%5===0) {
  result = n / 5;
}else {
  for(let i = five ; i > 0 ; i -= 1 ){
    let count = n;
    if((count - (i * 5))%3===0){
      five = i;
      three = (count - (i * 5)) / 3;
      result = five + three;
      break;
    }
  }
  if(result===0&&n%3===0) result = n / 3;
}
if(result===0) console.log(-1);
else console.log(result);