// Solution 1
function solution1(dot) {
  const [x, y] = [dot[0], dot[1]];

  if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y > 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else if (x > 0 && y < 0) {
    return 4;
  }
}

// Solution 2
function solution2(dot) {
  const [x, y] = [dot[0], dot[1]];
  const flag = x * y > 0;

  if (x > 0) {
    return flag ? 1 : 4;
  }

  return flag ? 3 : 2;
}
