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

// Solution 2
function solution2(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);

  for (const [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const distance = Array(n + 1).fill(0);

  distance[1] = 1;

  const queue = [1];

  while (queue.length > 0) {
    const src = queue.shift();

    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        queue.push(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }

  const maxDistance = Math.max(...distance);
  const maxDistanceCount = distance.filter(
    (value) => value === maxDistance
  ).length;

  return maxDistanceCount;
}

// Solution 3
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];

    delete this.queue[this.front];
    this.front += 1;

    return value;
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution3(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);

  for (const [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const distance = Array(n + 1).fill(0);

  distance[1] = 1;

  const queue = new Queue();

  queue.enqueue(1);

  while (!queue.isEmpty()) {
    const src = queue.dequeue();

    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        queue.enqueue(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }

  const maxDistance = Math.max(...distance);
  const maxDistanceCount = distance.filter(
    (value) => value === maxDistance
  ).length;

  return maxDistanceCount;
}
