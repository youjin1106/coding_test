const fs = require('fs');
const input = fs.readFileSync('testFile.txt').toString().trim().split('\n');

const city = Number(input[0]);
const distance = input[1].split(' ').map(Number);
let cost = input[2].split(' ').map(Number);

let minCost = cost[0];
for(let i = 0 ; i < city ; i += 1){
  minCost = Math.min(cost[i], minCost);
  cost[i] = minCost;
}

let totalCost = 0;
for (let j = 0 ; j < city-1 ; j += 1){
  totalCost += distance[j] * cost[j];
}
console.log(totalCost);