// Solution 1
function solution1(priorities, location) {
  const _priorities = priorities.slice();
  const queue = Array.from({ length: _priorities.length }, (_, index) => index);
  const done = [];

  while (queue.length > 0) {
    const topPriority = Math.max(..._priorities);
    const outputPriority = _priorities.shift();
    const outputWork = queue.shift();

    if (outputPriority === topPriority) {
      done.push(outputWork);
    } else {
      queue.push(outputWork);
      _priorities.push(outputPriority);
    }
  }

  const order = done.indexOf(location) + 1;

  return order;
}

// Solution 2
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const value = this.head.value;

    this.head = this.head.next;

    return value;
  }

  peek() {
    return this.head.value;
  }
}

function solution2(priorites, location) {
  const _priorites = priorites.slice();
  const queue = new Queue();
  let count = 0;

  for (let i = 0; i < _priorites.length; i++) {
    queue.enqueue([_priorites[i], i]);
  }

  _priorites.sort((a, b) => b - a);

  while (true) {
    const [currentPriority, _] = queue.peek();

    if (currentPriority < _priorites[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const [_, index] = queue.dequeue();

      count += 1;

      if (location === index) {
        return count;
      }
    }
  }
}
