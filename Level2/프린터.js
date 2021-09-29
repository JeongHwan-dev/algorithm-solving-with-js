function solution(priorities, location) {
  let order;
  let i = 0;
  const queue = Array.from({ length: priorities.length }, () => i++);
  const done = [];

  while (queue.length > 0) {
    const topPriority = Math.max(...priorities);
    const outputPriority = priorities.shift();
    const outputWork = queue.shift();

    if (outputPriority === topPriority) {
      done.push(outputWork);
    } else {
      queue.push(outputWork);
      priorities.push(outputPriority);
    }
  }

  order = done.indexOf(location) + 1;

  return order;
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));
