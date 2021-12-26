// Solution 1
function solution1(n, edge) {
  const visited = new Array(n + 1).fill(false);
  const level = new Array(n + 1).fill(0);

  function BFS(start, arr) {
    const queue = [start];

    visited[start] = true;

    while (queue.length) {
      const head = queue.shift();
      const lev = level[head] + 1;

      for (const node of arr) {
        if (node[0] === head && !visited[node[1]]) {
          queue.push(node[1]);
          visited[node[1]] = true;
          level[node[1]] = lev;
        } else if (node[1] === head && !visited[node[0]]) {
          queue.push(node[0]);
          visited[node[0]] = true;
          level[node[0]] = lev;
        }
      }
    }
  }

  BFS(1, edge);

  const maxLevel = Math.max(...level);
  const maxLevelCount = level.filter((l) => l === maxLevel).length;

  return maxLevelCount;
}
