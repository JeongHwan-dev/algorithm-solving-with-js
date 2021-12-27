// Solution 1
function solution1(n, times) {
  const _times = times.slice();

  _times.sort((a, b) => a - b);

  let leftPoint = 1;
  let rightPoint = n * _times[_times.length - 1];
  let minTotalTime = rightPoint;

  while (leftPoint <= rightPoint) {
    const mid = Math.floor((leftPoint + rightPoint) / 2);
    let count = 0;

    times.forEach((time) => {
      count += Math.floor(mid / time);

      if (count >= n) {
        minTotalTime = Math.min(minTotalTime, mid);
        return;
      }
    });

    if (count >= n) {
      rightPoint = mid - 1;
    } else {
      leftPoint = mid + 1;
    }
  }

  return minTotalTime;
}

// Solution 2
function solution2(n, times) {
  const _times = times.slice();
  const sortedTimes = _times.sort((a, b) => a - b);
  let left = 1;
  let right = sortedTimes[sortedTimes.length - 1] * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);

    sum < n ? (left = mid + 1) : (right = mid - 1);
  }

  return left;
}
