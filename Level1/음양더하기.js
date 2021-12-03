// Solution 1
function solution1(absolutes, signs) {
  let sum = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      sum += absolutes[i];
    } else {
      sum -= absolutes[i];
    }
  }

  return sum;
}

// Solution 2
function solution2(absolutes, signs) {
  const sum = absolutes.reduce(
    (acc, cur, index) => acc + cur * (signs[index] ? 1 : -1),
    0
  );

  return sum;
}

// Solution 3
function solution3(absolutes, signs) {
  const sum = absolutes.reduce(
    (acc, cur, index) => (signs[index] ? acc + cur : acc - cur),
    0
  );

  return sum;
}
