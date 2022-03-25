// Solution 1
function solution1(N, road, K) {
  const graph = Array.from({ length: N + 1 }, () => []);
  const townsDistance = Array(N + 1).fill(Infinity);

  road.forEach(([x, y, time]) => {
    graph[x].push({
      to: y,
      time,
    });
    graph[y].push({
      to: x,
      time,
    });
  });

  function bfs(start) {
    const queue = [];

    queue.push(start);

    while (queue.length) {
      const { to } = queue.shift();

      graph[to].forEach((next) => {
        if (townsDistance[next.to] > townsDistance[to] + next.time) {
          townsDistance[next.to] = townsDistance[to] + next.time;
          queue.push(next);
        }
      });
    }
  }

  townsDistance[1] = 0;
  bfs({ to: 1, time: 0 });

  const townsCount = townsDistance.filter((time) => time <= K).length;

  return townsCount;
}
