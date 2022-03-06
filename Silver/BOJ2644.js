// Solution 1
function solution(n, target, m, relationships) {
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  const visited = Array.from({ length: n + 1 }, () => false);
  const [firstPerson, secondPerson] = target;
  let degreeOfRelationship = -1;

  for (const [parent, child] of relationships) {
    graph[parent][child] = 1;
    graph[child][parent] = 1;
  }

  function dfs(l, count) {
    if (l === secondPerson) {
      degreeOfRelationship = count;
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[l][i] === 1 && !visited[i]) {
          visited[i] = true;
          dfs(i, count + 1);
          visited[i] = false;
        }
      }
    }
  }

  dfs(firstPerson, 0);

  return degreeOfRelationship;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const target = input[1].split(' ').map((value) => parseInt(value));
const m = parseInt(input[2]);
const relationships = [];

for (let i = 3; i < input.length; i++) {
  const relationship = input[i].split(' ').map((value) => parseInt(value));

  relationships.push(relationship);
}

console.log(solution(n, target, m, relationships));
