// Solution 1
function solution1(progresses, speeds) {
  const answer = [];

  while (progresses.length !== 0) {
    let cnt = 0;

    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      cnt++;
    }

    if (cnt) {
      answer.push(cnt);
    }
  }

  return answer;
}

// Solution 2
class Queue {
  constructor() {
    this._arr = [];
  }

  enqueue(item) {
    this._arr.push(item);
  }

  dequeue() {
    return this._arr.shift();
  }

  size() {
    return this._arr.length;
  }
}

function solution2(progresses, speeds) {
  const answer = [];
  const pQueue = new Queue();
  const sQueue = new Queue();

  for (const n of progresses) {
    pQueue.enqueue(n);
  }

  for (const n of speeds) {
    sQueue.enqueue(n);
  }

  while (pQueue.size()) {
    let cnt = 0;

    for (let i = 0; i < pQueue.size(); i++) {
      pQueue._arr[i] += sQueue._arr[i];
    }

    while (pQueue._arr[0] >= 100) {
      pQueue.dequeue();
      sQueue.dequeue();
      cnt++;
    }

    if (cnt) {
      answer.push(cnt);
    }
  }

  return answer;
}

// Solution 3
function solution3(progresses, speeds) {
  let answer = [0];
  const days = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}

// Solution 4
function solution4(progresses, speeds) {
  const restProgresses = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  const result = [];
  let currentProcess = restProgresses[0];
  let count = 1;

  for (let i = 1; i < restProgresses.length; i++) {
    if (restProgresses[i] > currentProcess) {
      result.push(count);
      count = 1;
      currentProcess = restProgresses[i];
    } else {
      count++;
    }
  }

  result.push(count);

  return result;
}
