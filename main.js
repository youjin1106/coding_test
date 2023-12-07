const fs = require('fs');
const input = fs.readFileSync('testFile.txt').toString().split('\n');

const count = input[0];

let result = '';
for( let i = 0; i<4 ; i+=1){
  for(let j = 0 ; j < i ; j+=1 ){
    result += '*'
  }
  result += '\n';
}
console.log(result);
