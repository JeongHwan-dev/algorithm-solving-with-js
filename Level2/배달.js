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

// Solution 2
function solution2(N, road, K) {
  const graph = Array.from({ length: N + 1 }, () => []);
  const townsDistance = Array.from({ length: N + 1 }, () => Infinity);

  road.forEach(([x, y, time]) => {
    graph[x].push([y, time]);
    graph[y].push([x, time]);
  });

  function dfs(townNum, totalTime) {
    if (townsDistance[townNum] < totalTime) {
      return;
    }

    townsDistance[townNum] = totalTime;

    for (const [nextTownNum, time] of graph[townNum]) {
      dfs(nextTownNum, totalTime + time);
    }
  }

  dfs(1, 0);

  const townsCount = townsDistance.filter((time) => time <= K).length;

  return townsCount;
}
