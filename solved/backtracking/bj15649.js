const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let list = [];
for (let i = 1; i <= n; i += 1) {
  list.push(i);
}
let visited = new Array(n).fill(false);
let selected = [];
let result = "";
function dfs(list, depth) {
  if (depth === m) {
    const arr = [];
    for (let i of selected) arr.push(list[i]);
    result += arr.join(" ") + "\n";
    return;
  }
  for (let i = 0; i < n; i += 1) {
    if (visited[i]) continue; //현재 방문 상태인지 확인
    selected.push(i); //현재 인덱스 선택
    visited[i] = true; //현재 인덱스에 방문한 상태(중복 제거 위함)
    dfs(list, depth + 1); //재귀 호출
    selected.pop(); //인덱스 선택 해제
    visited[i] = false; //방문 상태 취소
  }
}
dfs(list, 0);
console.log(result);
