const fs = require('fs');
const input = fs.readFileSync('testFile.txt').toString().trim().split('\n');

const n = Number(input[0]);
const arr = []
for(let i = 1 ; i <= n ; i += 1){
  const [x,y] =input[i].split(' ').map(Number);
  arr.push([x,y]);
}

//정렬
arr.sort((a,b) => {
  //x좌표가 같지 않을 때 x좌표로만 비교
  if(a[0]!=b[0]) return a[0]-b[0]
  //x좌표가 같은 경우 y좌표를 비교
  else return a[1]-b[1]
})

let result = '';
arr.forEach(a => result += a[0] + ' ' + a[1] + '\n');

console.log(result);