function solution(n, times) {
  const _times = times.slice();

  _times.sort((a, b) => a - b);

  let leftPoint = 1;
  let rightPoint = n * _times[_times.length - 1];
  let minTotalTime = rightPoint;

  while (left <= right) {
    const mid = Math.floor((leftPoint + rightPoint) / 2);
    let count = 0;

    times.forEach((time) => {
      count += Math.floor(mid / time);

      if (count >= n) {
        minTotalTime = Math.min(minTotalTime, min);
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
