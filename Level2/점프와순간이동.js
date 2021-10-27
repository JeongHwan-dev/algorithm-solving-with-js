// Solution 1
function solution1(n) {
  let usage = 1;

  while (n !== 1) {
    if (n % 2 !== 0) {
      usage++;
      n = Math.floor(n / 2);
    } else {
      n = n / 2;
    }
  }

  return usage;
}

// Solution 2
function solution2(n) {
  let usage = 0;

  while (n > 0) {
    usage += n % 2;
    n = Math.floor(n / 2);
  }

  return usage;
}
