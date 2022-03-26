// Solution 1
function solution1(a, b) {
  function bfs(startNum) {
    const queue = [];

    queue.push([startNum, 1]);

    while (queue.length > 0) {
      const [num, operationCount] = queue.shift();

      if (num === b) {
        return operationCount;
      } else {
        if (num * 2 <= b) {
          queue.push([num * 2, operationCount + 1]);
        }

        if (num * 10 + 1 <= b) {
          queue.push([num * 10 + 1, operationCount + 1]);
        }
      }
    }

    return -1;
  }

  const operationCount = bfs(a);

  return operationCount;
}

// Solution 2
function solution2(a, b) {
  let minOperationCount = -1;

  function dfs(num, operationCount) {
    if (num === b) {
      minOperationCount = operationCount;
    }

    if (num * 2 <= b) {
      dfs(num * 2, operationCount + 1);
    }

    if (num * 10 + 1 <= b) {
      dfs(num * 10 + 1, operationCount + 1);
    }
  }

  dfs(a, 1);

  return minOperationCount;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const [a, b] = input.split(' ').map((value) => parseInt(value));

console.log(solution1(a, b));

console.log(solution2(2, 162));
