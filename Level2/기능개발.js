function solution1(progresses, speeds) {
  let answer = [];

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
  let answer = [];
  let pQueue = new Queue();
  let sQueue = new Queue();

  for (let n of progresses) {
    pQueue.enqueue(n);
  }

  for (let n of speeds) {
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

function solution3(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, idx) =>
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
