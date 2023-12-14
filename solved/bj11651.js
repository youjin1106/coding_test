const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = Number(input[0]);
const arr = [];
for(let i = 1 ; i <= count ; i += 1){
  const [x, y] = input[i].split(' ').map(Number);
  arr.push([x, y]);
}

const sortedArr = arr.sort((a, b) => {
  if(a[1] != b[1]) return a[1]-b[1]
  else return a[0] - b[0]
})

let result = '';
for( let j = 0 ; j < sortedArr.length ; j +=1 ){
  result += sortedArr[j].join(' ') + '\n';
}

console.log(result);