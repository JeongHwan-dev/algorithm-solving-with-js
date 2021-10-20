function solution(jobs) {
  const priorityQueue = [];
  let sumTime = 0;
  let time = 0;
  let i = 0;

  jobs.sort((a, b) => a[0] - b[0]);

  while (jobs.length > i || priorityQueue.length > 0) {
    if (jobs.length > i && jobs[i][0] <= time) {
      priorityQueue.push(jobs[i++]);
      priorityQueue.sort((a, b) => a[1] - b[1]);
      continue;
    }

    if (priorityQueue.length > 0) {
      const [requestTime, leadTime] = priorityQueue.shift();

      time += leadTime;
      sumTime += time - requestTime;
    } else {
      time = jobs[i][0];
    }
  }

  const avgTime = parseInt(sumTime / jobs.length);

  return avgTime;
}
