// Solution 1
function solution1(n) {
  const queue = [];
  let count = 0;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    queue.push(i);
    sum += i;

    while (sum > n) {
      sum -= queue.shift();
    }

    if (sum === n) {
      count++;
    }
  }

  return count;
}
